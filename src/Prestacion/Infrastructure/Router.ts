import { Router } from 'express';
import { PrestacionController } from './Controllers';

const controller = new PrestacionController();
const router = Router();

router.post('/prestacion', controller.create);
router.get('/prestaciones', controller.getAll);
router.get('/prestacion/:id', controller.getById);
router.put('/prestacion/:id', controller.update);
router.delete('/prestacion/:id', controller.delete);

export { router as PrestacionRouter };
