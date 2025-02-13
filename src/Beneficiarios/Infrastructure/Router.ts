import { Router } from "express";
import { BeneficiarioController } from "./Controller";

const controller = new BeneficiarioController();
const router = Router();

router.post('/beneficiario', controller.create); 
router.get('/beneficiarios', controller.getAll);
router.get('/beneficiario/:id', controller.getById);
router.put('/beneficiario/:id', controller.update);
router.delete('/beneficiario/:id', controller.delete);

export { router as BeneficiarioRouter };