import { Router } from 'express';
import passport from 'passport';
import { UserController } from 'controllers';

const router = Router();

/******************************************************************************
 *                      Auth User - "GET /api/user/"
 ******************************************************************************/
router.get('/', passport.authenticate('jwt', { session: false }), UserController.isValidToken);

/******************************************************************************
 *                       SignIn - "POST /api/user/"
 ******************************************************************************/
router.post('/', UserController.emailSignIn);

/******************************************************************************
 *                       SignOut - "DELETE /api/user/"
 ******************************************************************************/
router.delete('/', UserController.emailSignOut);

export default router;
