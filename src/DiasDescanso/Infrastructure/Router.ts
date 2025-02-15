import { Router } from "express";
import { DiasDescansoController } from "./Controller";

const controller = new DiasDescansoController();
const router = Router();

router.post('/dias-descanso', controller.create.bind(controller));
router.get('/dias-descansos', controller.getAll.bind(controller));
router.get('/dias-descanso/:id', controller.getbyId.bind(controller));
router.put('/dias-descanso/:id', controller.update.bind(controller));
router.delete('/dias-descanso/:id', controller.delete.bind(controller));

export { router as DiasDescansoRouter };