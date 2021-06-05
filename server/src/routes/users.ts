import { Router } from 'express';
import { UserController } from 'controllers';

const router = Router();

/******************************************************************************
 *                      Auth User - "GET /api/users/"
 ******************************************************************************/
router.get('/', UserController.test);

export default router;
