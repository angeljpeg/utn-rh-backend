import { ExpressUsuarioController } from './ExpressUsuarioController';
import { Router } from 'express';

const controller = new ExpressUsuarioController();
const UsuarioRouter = Router();

UsuarioRouter.post('/usuario', controller.create);
UsuarioRouter.get('/usuarios', controller.getAll);
UsuarioRouter.get('/usuario/:id', controller.getById);
UsuarioRouter.get('/usuario/:campo/:value', controller.getOneBy);
UsuarioRouter.post('/usuario/login', controller.login);
UsuarioRouter.put('/usuario/:id', controller.update);

export { UsuarioRouter };
