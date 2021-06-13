import { Router } from 'express';
import passport from 'passport';
import { DashboardController } from 'controllers';

const router = Router();

/******************************************************************************
 *                 Load Dashboard Data - "GET /api/dashboard/"
 ******************************************************************************/
router.get('/', passport.authenticate('jwt', { session: false }), DashboardController.load);

export default router;
