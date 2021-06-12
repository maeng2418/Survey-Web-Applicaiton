import { Request, Response, NextFunction } from 'express';
import { ParticipantService } from 'services';
import { StatusCodes } from 'http-status-codes';
import { SurveyParticipant } from 'models';
import CustomError from 'modules/exceptions/custom-error';

// 총 참가자 수
const findAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const participantCount = await ParticipantService.findAll();

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `참가자 수를 불러오는데 성공하였습니다.`,
      result: {
        success: true,
        count: participantCount,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 최근 참가자 수
const findLastestParticipants = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { count } = req.params;
  try {
    const participantCount = await ParticipantService.findLastestParticipants(count);

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `참가자 수를 불러오는데 성공하였습니다.`,
      result: {
        success: true,
        count: participantCount,
      },
    });
  } catch (err) {
    next(err);
  }
};

// 응답 생성 { participantId, optionList: [optionId]}
const createAnswers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { body } = req;
  try {
    await ParticipantService.createAnswers(body);

    res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      message: `응답을 생성하였습니다.`,
      result: {
        success: true,
      },
    });
  } catch (err) {
    next(err);
  }
};

const join = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { body, params } = req;

  console.log(body, params);

  try {
    const participant = await ParticipantService.join(parseInt(params.surveyId), body.name);

    if (!participant[1]) {
      throw new CustomError(StatusCodes.BAD_REQUEST, '이미 설문에 참여하였습니다.', '');
    }

    res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      message: `성공적으로 참여하였습니다.`,
      result: {
        success: true,
        participantId: participant[0].id,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default {
  findAll,
  findLastestParticipants,
  createAnswers,
  join,
};
