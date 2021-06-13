import { Request, Response, NextFunction } from 'express';
import { ParticipantService, SurveyService } from 'services';
import { StatusCodes } from 'http-status-codes';
import CustomError from 'modules/exceptions/custom-error';
import { Participant } from 'models';

// 설문 리스트 surveyData: {id: {title, count}}
const findList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { page } = req.params;
  try {
    const surveyData = await SurveyService.findList(parseInt(page));

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `설문 리스트를 불러오는데 성공하였습니다.`,
      result: {
        success: true,
        surveyData: surveyData,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 설문 상세 - questionList: [ questionId: {question, position, type, optionList:[{optionId, count}]}]
const findDetail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id, page }: any = req.query;
  try {
    const questionOptionListData: any = await SurveyService.findQuestionOptionList(
      parseInt(id),
      parseInt(page)
    );

    if (questionOptionListData.length < 0) {
      throw new CustomError(
        StatusCodes.BAD_REQUEST,
        `설문지 질문과 옵션을 가져오는데 실패하였습니다.`,
        ''
      );
    }

    const questionOptionDataList = questionOptionListData.map((item: any) => {
      return {
        id: item.questionId,
        question: item.question.question,
        type: item.question.type,
        position: item.question.position,
        option: { id: item.optionId, title: item.option.title },
      };
    });

    const result = questionOptionDataList.reduce((acc: any, cur: any) => {
      if (acc.hasOwnProperty(cur.id)) {
        acc[cur.id]['optionList'].push(cur.option);
      } else {
        acc[cur.id] = {
          idx: cur.id,
          question: cur.question,
          type: cur.type,
          position: cur.position,
          optionList: [cur.option],
        };
      }
      return acc;
    }, {});

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `설문지 상세정보를 가져오는데 성공하였습니다.`,
      result: {
        success: true,
        questionList: result,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 설문 정보 info: {surveyId, title, writer}
const findInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { surveyId } = req.params;
  try {
    const survey = await SurveyService.findInfo(parseInt(surveyId));

    if (!survey)
      throw new CustomError(
        StatusCodes.BAD_REQUEST,
        `해당 설문지 정보를 가져오는데 실패하였습니다.`,
        ''
      );

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `설문지 정보를 가져오는데 성공하였습니다.`,
      result: {
        success: true,
        info: {
          surveyId: survey.id,
          writer: survey.user.username,
          title: survey.title,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

// 생성 {title, writerId, questionList: [{question, position, type, optionList:[{value}]}]}
const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { body } = req;
  try {
    const surveyId = await SurveyService.create(body);

    res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      message: `설문지를 생성하였습니다.`,
      result: {
        success: true,
        surveyId: surveyId,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 제거
const remove = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { surveyId } = req.params;
  try {
    const survey = await SurveyService.findInfo(parseInt(surveyId));
    if (!survey)
      throw new CustomError(
        StatusCodes.BAD_REQUEST,
        `해당 설문지 정보를 가져오는데 실패하였습니다.`,
        ''
      );

    await SurveyService.remove(parseInt(surveyId));

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `설문지를 삭제하였습니다.`,
      result: {
        success: true,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 편집 {title, writerId, questionList: [{questionId, questionTitle, questionPos, questionType}], optionList:[{optionId, optionTitle}]}
const edit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { params, body }: any = req;
  try {
    await SurveyService.editSurvey({
      id: parseInt(params.surveyId),
      title: body.title,
      writer: body.writerId,
      questions: body.questionList,
    });
    res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      message: `설문지를 수정하였습니다.`,
      result: {
        success: true,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 설문 리포트 - {surveyId, title, questionList: [questionId:{question: '', position: 0, optionList: []}]}
const findReport = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id, page }: any = req.query;
  try {
    const reportData = await SurveyService.findReport(parseInt(id), parseInt(page));

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `리포트 데이터를 불러오는데 성공하였습니다.`,
      result: {
        success: true,
        surveyId: id,
        title: reportData.surveyTitle,
        questionList: Object.values(reportData.questionData),
      },
    });
  } catch (err) {
    next(err);
  }
};

// 설문 참여리스트 - {totalParticipant}
const findParticipant = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id }: any = req.query;
  try {
    const totalParticipant = await SurveyService.findParticipant(parseInt(id));

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `참여자 리스트를 불러오는데 성공하였습니다.`,
      result: {
        success: true,
        totalParticipant: totalParticipant,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default {
  findList,
  findDetail,
  findInfo,
  create,
  remove,
  edit,
  findReport,
  findParticipant,
};
