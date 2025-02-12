import { Router } from 'express';
import { DescansoController } from './Controller';

const controller = new DescansoController();
const router = Router();

router.post('/descanso', controller.create);
router.get('/descansos', controller.getAll);
router.get('/descanso/:id', controller.getById);
router.put('/descanso/:id', controller.update);
router.delete('/descanso/:id', controller.delete);

export { router as DescansoRouter };
