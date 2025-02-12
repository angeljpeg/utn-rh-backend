import { Router } from "express";
import { EmpleadoController } from "./Controller";

const controller = new EmpleadoController();
const router = Router();

router.post('/empleado', controller.create);

export { router as EmpleadoRouter };