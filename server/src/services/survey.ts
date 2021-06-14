import bodyParser from 'body-parser';
import { StatusCodes } from 'http-status-codes';
import {
  Survey,
  Question,
  Option,
  User,
  SurveyParticipant,
  Participant,
  QuestionOption,
  OptionParticipant,
} from 'models';
import CustomError from 'modules/exceptions/custom-error';
import { Op } from 'sequelize';

// 설문리스트
const findList = async (page: number): Promise<{ [id: string]: number }> => {
  const surveyList = await Survey.findAll({
    attributes: ['id', 'title'],
    where: {
      id: {
        [Op.between]: [page * 10, (page + 1) * 10],
      },
    },
    order: [['createdAt', 'DESC']],
  });

  const surveyParticipantList = await SurveyParticipant.findAll({
    attributes: ['id', 'participantId', 'surveyId'],
    include: { model: Survey, as: 'survey' },
    where: {
      surveyId: {
        [Op.in]: surveyList.map((survey) => survey.id),
      },
    },
  });

  const surveyParticipants = surveyParticipantList.reduce((acc: any, cur: any): any => {
    if (acc.hasOwnProperty(cur.surveyId)) {
      acc[cur.surveyId]['count'] += 1;
      return acc;
    } else {
      acc[cur.surveyId] = {};
      acc[cur.surveyId]['title'] = cur.survey.title;
      acc[cur.surveyId]['count'] = 1;
      return acc;
    }
  }, {});

  const surveys = surveyList.reduce((acc: any, cur: any) => {
    if (acc.hasOwnProperty(cur.id)) {
      acc[cur.id]['count'] = 0;
      return acc;
    } else {
      acc[cur.id] = {};
      acc[cur.id]['title'] = cur.title;
      acc[cur.id]['count'] = 0;
      return acc;
    }
  }, {});

  return { ...surveys, ...surveyParticipants };
};

// 설문 상세
const findQuestionOptionList = async (id: number, page: number): Promise<QuestionOption[]> => {
  const questions = await QuestionOption.findAll({
    attributes: ['id', 'surveyId', 'questionId', 'optionId'],
    include: [
      { model: Question, as: 'question' },
      { model: Option, as: 'option' },
    ],
    where: {
      surveyId: id,
    },
    offset: page * 10,
    limit: 10,
  });

  return questions;
};

// 설문 정보
const findInfo = async (surveyId: number): Promise<any> => {
  const survey = await Survey.findOne({
    attributes: ['id', 'title'],
    include: [{ model: User, as: 'user' }],
    where: {
      id: surveyId,
    },
  });
  return survey;
};

// 설문 생성
const create = async (data: any): Promise<any> => {
  const survey = await Survey.create({
    title: data.title,
    userId: data.writerId,
  });
  if (!survey) throw new CustomError(StatusCodes.BAD_REQUEST, `설문지 생성 실패`, '');
  data.questionList.forEach(async ({ question, position, type, optionList }: any) => {
    const questionData = await Question.create({
      question: question,
      type: type,
      position: position,
    });
    if (!questionData) throw new CustomError(StatusCodes.BAD_REQUEST, `질문 생성 실패`, '');
    optionList.forEach(async ({ value }: any) => {
      const optionData = await Option.create({
        title: value,
      });
      if (!optionData) throw new CustomError(StatusCodes.BAD_REQUEST, `옵션 생성 실패`, '');
      const questionOptionData = await QuestionOption.create({
        surveyId: survey.id,
        questionId: questionData.id,
        optionId: optionData.id,
      });
      if (!questionOptionData)
        throw new CustomError(StatusCodes.BAD_REQUEST, `질문-옵션 생성 실패`, '');
    });
  });

  return survey.id;
};

// 설문 삭제
const remove = async (surveyId: number): Promise<void> => {
  await Survey.destroy({ where: { id: surveyId } });
  return;
};

// 설문 편집
const editSurvey = async (data: any): Promise<any> => {
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
};

// 설문 리포트
const findReport = async (id: number, page: number): Promise<any> => {
  const survey = await Survey.findOne({
    attributes: ['id', 'title'],
    where: {
      id: id,
    },
  });

  const questionList = await QuestionOption.findAll({
    attributes: ['id', 'surveyId', 'questionId', 'optionId'],
    include: [
      { model: Question, as: 'question' },
      { model: Option, as: 'option' },
    ],
    where: {
      [Op.and]: [{ surveyId: id }],
    },
    offset: page * 10,
    limit: 10,
  });

  const participantOptionList = await OptionParticipant.findAll({
    attributes: ['optionId'],
    include: { model: Participant, as: 'participant' },
    where: {
      optionId: {
        [Op.in]: questionList.map((question: any) => question.optionId),
      },
    },
  });

  const questionData = questionList.reduce((acc: any, cur: any): any => {
    if (acc.hasOwnProperty(cur.questionId)) {
      acc[cur.questionId]['optionList'].push({
        optionId: cur.optionId,
        option: cur.option.title,
        selector: participantOptionList
          .filter((selector: any) => selector.optionId === cur.optionId)
          .map((selector: any) => selector.participant.name),
      });
      return acc;
    } else {
      acc[cur.questionId] = {};
      acc[cur.questionId]['questionId'] = cur.questionId;
      acc[cur.questionId]['question'] = cur.question.question;
      acc[cur.questionId]['position'] = cur.question.position;
      acc[cur.questionId]['optionList'] = [
        {
          optionId: cur.optionId,
          option: cur.option.title,
          selector: participantOptionList
            .filter((selector: any) => selector.optionId === cur.optionId)
            .map((selector: any) => selector.participant.name),
        },
      ];
      return acc;
    }
  }, {});

  return {
    surveyTitle: survey ? survey.title : '',
    questionData: questionData,
  };
};

// 설문 참여 수
const findParticipant = async (surveyId: number): Promise<any> => {
  const participants: any = await SurveyParticipant.findAll({
    attributes: ['id'],
    where: {
      surveyId: surveyId,
    },
  });

  return participants.length;
};

export default {
  findList,
  findQuestionOptionList,
  findInfo,
  create,
  remove,
  editSurvey,
  findReport,
  findParticipant,
};
