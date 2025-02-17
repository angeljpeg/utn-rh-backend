import { Router } from 'express';
import { PrestacionSolicitudController } from './Controller';

const controller = new PrestacionSolicitudController();
const router = Router();

router.post('/prestacion-solicitud', controller.create);
router.get('/prestacion-solicitudes', controller.getAll);
router.get('/prestacion-solicitud/:id', controller.getById);
router.put('/prestacion-solicitud/:id', controller.update);
router.delete('/prestacion-solicitud/:id', controller.delete);

export { router as PrestacionSolicitudRouter };
