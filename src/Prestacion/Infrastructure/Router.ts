import { Router } from 'express';
import { PrestacionController } from './Controllers';

const controller = new PrestacionController();
const router = Router();

router.post('/prestacion', controller.create);
router.get('/prestaciones', controller.getAll);
router.get('/prestacion/:id', controller.getById);

export { router as PrestacionRouter };
