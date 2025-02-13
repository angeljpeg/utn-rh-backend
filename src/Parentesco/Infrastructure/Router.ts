import { Router } from "express";
import { ParentescoController } from "./Controller";

const controller = new ParentescoController();
const router = Router();

router.post('/parentesco', controller.create);
router.get('/parentescos', controller.getAll);
router.get('/parentesco/:id', controller.getById);
router.put('/parentesco/:id', controller.update);

export { router as ParentescoRouter };