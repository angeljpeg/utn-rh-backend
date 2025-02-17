import { Router } from 'express';
import { PrestacionSolicitudController } from './Controller';

const controller = new PrestacionSolicitudController();
const router = Router();

router.post('/solicitud-prestacion', controller.create);
router.get('/solicitudes-prestacion', controller.getAll);
router.get('/solicitud-prestacion/:id', controller.getById);
router.put('/solicitud-prestacion/:id', controller.update);
router.delete('/solicitud-prestacion/:id', controller.delete);

export { router as PrestacionSolicitudRouter };
