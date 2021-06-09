import bodyParser from 'body-parser';
import { StatusCodes } from 'http-status-codes';
import { Survey, Question, Option, User, SurveyParticipant, Participant } from 'models';
import CustomError from 'modules/exceptions/custom-error';
const { Op } = require('sequelize');

// 설문 리스트
const findList = async (page: number): Promise<Survey[]> => {
  try {
    const surveyList = await Survey.findAll({
      attributes: ['id', 'title'],
      where: {
        id: {
          [Op.between]: [page * 10, (page + 1) * 10],
        },
      },
    });
    return surveyList;
  } catch (err) {
    throw Error(err);
  }
};

// 설문 상세 - 질문 ID 리스트
const findQuestionIds = async (id: number, page: number): Promise<Question[]> => {
  try {
    const questions = await Question.findAll({
      attributes: ['id'],
      where: {
        // surveyId: id,
        [Op.and]: [
          { surveyId: id },
          {
            id: {
              [Op.between]: [page * 10, (page + 1) * 10],
            },
          },
        ],
      },
    });
    return questions;
  } catch (err) {
    throw Error(err);
  }
};

// 설문 상세 - 질문 및 옵션 리스트
const findQuestions = async (questionIdList: Question[]): Promise<Option[]> => {
  try {
    const questions = await Option.findAll({
      attributes: ['id', 'title', 'questionId'],
      include: { model: Question, as: 'question' },
      where: {
        questionId: {
          [Op.in]: questionIdList.map((question) => question.getDataValue('id')),
        },
      },
    });
    return questions;
  } catch (err) {
    throw Error(err);
  }
};

// 설문 정보
const findInfo = async (surveyId: number): Promise<SurveyParticipant | null> => {
  try {
    const survey = await SurveyParticipant.findOne({
      attributes: ['id', 'participantId', 'surveyId'],
      include: [
        { model: Participant, as: 'participant' },
        { model: Survey, as: 'survey' },
      ],
      where: {
        id: surveyId,
      },
    });
    return survey;
  } catch (err) {
    throw Error(err);
  }
};

// 설문 생성
const create = async (data: any): Promise<any> => {
  try {
    const survey = await Survey.create({
      title: data.title,
      userId: data.writerId,
    });
    if (!survey) throw new CustomError(StatusCodes.BAD_REQUEST, `설문지 생성 실패`, '');
    data.questionList.forEach(async (question: any) => {
      const questionData = await Question.create({
        question: question.questionTitle,
        type: question.questionType,
        position: question.questionPos,
        surveyId: survey.id,
      });
      if (!questionData) throw new CustomError(StatusCodes.BAD_REQUEST, `질문 생성 실패`, '');
      question.optionList.forEach(async (option: any) => {
        const optionData = await Option.create({
          title: option.optionTitle,
          questionId: questionData.id,
        });
        if (!optionData) throw new CustomError(StatusCodes.BAD_REQUEST, `옵션 생성 실패`, '');
      });
    });

    return;
  } catch (err) {
    throw Error(err);
  }
};

// 설문 삭제
const remove = async (surveyId: number): Promise<void> => {
  try {
    await Survey.destroy({ where: { id: surveyId } });
    return;
  } catch (err) {
    throw Error(err);
  }
};

// 설문 편집
const editSurvey = async (data: any): Promise<any> => {
  try {
    // 설문지 바꾸기
    const surveyData = await Survey.findByPk(data.id);
    if (!surveyData)
      throw new CustomError(StatusCodes.BAD_REQUEST, `설문지가 존재하지 않습니다.`, '');
    const survey = await surveyData.update({
      title: data.title,
      userId: data.writerId,
    });

    data.questions.forEach(async (question: any) => {
      // 질문 바꾸기
      const questionData = await Question.findOrCreate({
        attributes: ['id', 'question', 'type', 'surveyId', 'position'],
        where: {
          id: question.questionId,
        },
        defaults: { question: '', type: '', surveyId: data.id, position: 0 },
      });
      if (!questionData[0])
        throw new CustomError(StatusCodes.BAD_REQUEST, `질문이 존재하지 않습니다.`, '');
      await questionData[0].update({
        question: question.questionTitle,
        type: question.questionType,
        position: question.questionPos,
      });
      // 옵션들 바꾸기
      question.optionList.forEach(async (option: any) => {
        const optionData = await Option.findOrCreate({
          attributes: ['id', 'title', 'questionId'],
          where: {
            id: option.optionId,
          },
          defaults: { questionId: questionData[0].getDataValue('id'), title: '' },
        });
        if (!questionData[0])
          throw new CustomError(StatusCodes.BAD_REQUEST, `옵션이 존재하지 않습니다.`, '');
        await optionData[0].update({
          title: option.optionTitle,
        });
      });
    });

    return survey;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  findList,
  findQuestionIds,
  findQuestions,
  findInfo,
  create,
  remove,
  editSurvey,
};
