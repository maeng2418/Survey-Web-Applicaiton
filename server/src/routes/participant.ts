import { Router } from 'express';
import passport from 'passport';
import { ParticipantController } from 'controllers';

const router = Router();

/******************************************************************************
 *                Number of participants - "GET /api/participant/all"
 ******************************************************************************/
router.get('/all', passport.authenticate('jwt', { session: false }), ParticipantController.findAll);

/******************************************************************************
 *     Number of participants by type - "GET /api/participant/list/${type}"
 ******************************************************************************/
router.get(
  '/list/:count',
  passport.authenticate('jwt', { session: false }),
  ParticipantController.findLastestParticipants
);

/******************************************************************************
 *     Create Participation - "POST /api/participant"
 ******************************************************************************/
router.post('/', ParticipantController.createAnswers);

/******************************************************************************
 *     Create Participation - "POST /api/participant/join/${surveyId}"
 ******************************************************************************/
router.post('/join/:surveyId', ParticipantController.join);

export default router;
