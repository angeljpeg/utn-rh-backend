import { ExpressUsuarioController } from "./ExpressUsuarioController";
import { Router } from "express";

const controller = new ExpressUsuarioController();
const UsuarioRouter = Router();

UsuarioRouter.post("/usuario", controller.create);

export { UsuarioRouter };
