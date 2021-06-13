import { Router } from 'express';
import UserRouter from './user';
import SurveyRouter from './survey';
import ParticipantRouter from './participant';
import DashboardRouter from './dashboard';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/user', UserRouter);
router.use('/survey', SurveyRouter);
router.use('/participant', ParticipantRouter);
router.use('/dashboard', DashboardRouter);

// Export the base-router
export default router;
