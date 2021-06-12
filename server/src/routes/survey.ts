import { Router } from 'express';
import passport from 'passport';
import { SurveyController } from 'controllers';

const router = Router();

/******************************************************************************
 *                Survey List - "GET /api/survey/list/${page}"
 ******************************************************************************/
router.get(
  '/list/:page',
  passport.authenticate('jwt', { session: false }),
  SurveyController.findList
);

/******************************************************************************
 *   Survey Detail - "GET /api/survey/detail?id={surveyId}&page=${pageCount}"
 ******************************************************************************/
router.get('/detail', SurveyController.findDetail);

/******************************************************************************
 *                   Survey Info - "GET /api/survey/info"
 ******************************************************************************/
router.get('/info/:surveyId', SurveyController.findInfo);

/******************************************************************************
 *                    Create Survey - "POST /api/survey/"
 ******************************************************************************/
router.post('/', passport.authenticate('jwt', { session: false }), SurveyController.create);

/******************************************************************************
 *              Delete Survey - "Delete /api/survey/${surveyId}"
 ******************************************************************************/
router.delete(
  '/:surveyId',
  passport.authenticate('jwt', { session: false }),
  SurveyController.remove
);

/******************************************************************************
 *                 Edit Survey - "PUT /api/survey/${surveyId}"
 ******************************************************************************/
router.put('/:surveyId', passport.authenticate('jwt', { session: false }), SurveyController.edit);

export default router;
