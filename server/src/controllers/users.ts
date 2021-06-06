import { Request, Response, NextFunction } from 'express';
import { UserService } from 'services';
import { StatusCodes } from 'http-status-codes';
import CustomError from 'modules/exceptions/custom-error';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { jwtSecret, tokenExpire } from 'config/constants';
import { UserReq, IUserData } from 'dtos';

// 로그인
const emailSignIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const body = req.body;

  try {
    // 유저 찾기
    const emailUser = await UserService.findUserByEmail(body.email);
    if (!emailUser)
      throw new CustomError(StatusCodes.ACCEPTED, `no email user with ${body.email}`, '');
    if (
      emailUser.getDataValue('password') !==
      crypto.createHash('sha256').update(body.password).digest('base64')
    )
      throw new CustomError(StatusCodes.ACCEPTED, 'not matched password', '');

    // 토큰 생성
    const token = jwt.sign(
      {
        data: {
          id: emailUser.getDataValue('id'),
          username: emailUser.getDataValue('username'),
          email: emailUser.email,
        },
      },
      jwtSecret,
      { expiresIn: tokenExpire }
    );

    // 토큰을 쿠키에 저장
    res
      .cookie('authorization', token, {
        // 2 시간 뒤 만료
        expires: new Date(Date.now() + 120 * 60 * 1000),
      })
      .status(StatusCodes.OK)
      .json({
        status: StatusCodes.OK,
        message: `Log in success ${body.email}`,
        result: {
          success: true,
          username: emailUser.getDataValue('username'),
          email: emailUser.getDataValue('email'),
          token: emailUser.getDataValue('token'),
        },
      });
  } catch (err) {
    next(err);
  }
};

// 토큰 검사
const isValidToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const user = req.user as IUserData;
  try {
    if (user) {
      res.status(StatusCodes.OK).json({
        status: StatusCodes.OK,
        message: `valificated user ${user.username}`,
        result: {
          success: true,
          user: user,
        },
      });
    } else throw new CustomError(StatusCodes.BAD_REQUEST, 'not valid token', '');
  } catch (err) {
    next(err);
  }
};

// 로그아웃
const emailSignOut = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // 토큰 삭제
    res
      .clearCookie('authorization')
      .status(StatusCodes.OK)
      .json({
        status: StatusCodes.OK,
        message: `Log Out success`,
        result: {
          success: true,
        },
      });
  } catch (err) {
    next(err);
  }
};

export default {
  emailSignIn,
  emailSignOut,
  isValidToken,
};
