import { Router } from "express";
import { ParentescoController } from "./Controller";

const controller = new ParentescoController();
const router = Router();

router.post('/parentesco', controller.create);

export { router as ParentescoRouter };