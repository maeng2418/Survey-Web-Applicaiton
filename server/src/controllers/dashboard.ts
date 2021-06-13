import { Request, Response, NextFunction } from 'express';
import { DashboardService } from 'services';
import { StatusCodes } from 'http-status-codes';
import CustomError from 'modules/exceptions/custom-error';

// 대시보드 데이터 불러오기
const load = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const lastestSurveyParticipants = await DashboardService.findLastestSurvey();
    const totalParticipants = await DashboardService.findTotalParticipants();
    const weeklyParticipantsList = await DashboardService.findWeeklyParticipants();

    res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: `참가자 수를 불러오는데 성공하였습니다.`,
      result: {
        success: true,
        lastestSurvey: lastestSurveyParticipants,
        totalParticipants: totalParticipants,
        weeklyParticipantsList: weeklyParticipantsList,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default {
  load,
};
