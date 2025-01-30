import { Router } from 'express';
import { ExpressEmpleadoController } from './ExpressEmpleadoController';

const controller = new ExpressEmpleadoController();
const EmpleadoRouter = Router();
EmpleadoRouter.post('/empleado', controller.create);
export { EmpleadoRouter };
