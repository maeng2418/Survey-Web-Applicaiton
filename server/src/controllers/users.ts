import { Request, Response, NextFunction } from 'express';
import { UserService } from 'services';

// 테스트
const test = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(200).json({ result: 'success', data: 'TEST' });
  } catch (err) {
    next(err);
  }
};

export default {
  test,
};
