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

  try {
    let participant = await ParticipantService.findByName(body.name);
    if (!participant) {
      await ParticipantService.create(body.name);
      participant = await ParticipantService.findByName(body.name);
    }

    const surveyParticipant = await ParticipantService.join(
      participant.getDataValue('id'),
      parseInt(params.surveyId)
    );

    if (!surveyParticipant) {
      throw new CustomError(StatusCodes.ACCEPTED, `이미 참여하였습니다.`, '');
    }

    res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      message: `성공적으로 참여하였습니다.`,
      result: {
        success: true,
        participant: participant,
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
