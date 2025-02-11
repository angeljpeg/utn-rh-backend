import { Router } from 'express';
import { PrestacionController } from './Controllers';

const controller = new PrestacionController();
const router = Router();

router.post('/prestacion', controller.create);

export { router as PrestacionRouter };
