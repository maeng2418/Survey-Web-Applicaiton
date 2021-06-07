import { Router } from 'express';
import passport from 'passport';
import { UserController } from 'controllers';
import { StatusCodes } from 'http-status-codes';
import CustomError from 'modules/exceptions/custom-error';

const router = Router();

/******************************************************************************
 *                      Auth User - "GET /api/users/"
 ******************************************************************************/
router.get(
  '/',
  function (req, res, next) {
    passport.authenticate('jwt', { session: false }, function (err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        throw new CustomError(StatusCodes.ACCEPTED, `토큰이 존재하지 않습니다.`, '');
      }
      req.user = user;
      next();
    })(req, res, next);
  },
  UserController.isValidToken
);

/******************************************************************************
 *                       SignIn - "POST /api/users/"
 ******************************************************************************/
router.post('/', UserController.emailSignIn);

/******************************************************************************
 *                       SignOut - "DELETE /api/users/"
 ******************************************************************************/
router.delete('/', UserController.emailSignOut);

export default router;
