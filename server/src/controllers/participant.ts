import { Request, Response, NextFunction } from 'express';
import { ParticipantService } from 'services';
import { StatusCodes } from 'http-status-codes';

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

// 응답 생성 {surveyId, participantName, optionList: [optionId]}
const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { body } = req;

  try {
    await ParticipantService.create(body);

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

export default {
  findAll,
  findLastestParticipants,
  create,
};
