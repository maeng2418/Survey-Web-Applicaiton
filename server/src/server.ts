import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import BaseRouter from 'routes';
import helmet from 'helmet';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import CustomError from 'modules/exceptions/custom-error';
import 'express-async-errors';
import { parserLimit } from 'config/constants';

import passport from 'passport';
import strategies from 'modules/auth/passport';

// Init express
const app = express();

/************************************************************************************
 *                                 기본 express 세팅
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 보안
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// body-parser
app.use(bodyParser.json({ limit: parserLimit }));
app.use(bodyParser.urlencoded({ extended: true }));

// Passport and JWT
app.use(passport.initialize());
passport.use(strategies.jwt);

// Add APIs
app.use('/api', BaseRouter);

// 최종 에러처리
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  return res.status(err.status).json({
    status: err.status || 500,
    message: err.message || 'Something went wrong',
    result: { success: false },
  });
});

// Export express instance
export default app;
