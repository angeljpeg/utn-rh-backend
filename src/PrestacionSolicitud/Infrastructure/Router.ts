import { Router } from "express";
import { PrestacionSolicitudController } from "./Controller";

const controller = new PrestacionSolicitudController();
const router = Router();

router.post('/prestacionSolicitud', controller.create);
router.get('/prestacionSolicituds', controller.getAll);
router.get('/prestacionSolicitud/:id', controller.getById);
router.put('/prestacionSolicitud/:id', controller.update);


export { router as PrestacionSolicitudRouter };

