import { ExpressUsuarioController } from "./ExpressUsuarioController";
import { Router } from "express";

const controller = new ExpressUsuarioController();
const UsuarioRouter = Router();

UsuarioRouter.post("/usuario", controller.create);
UsuarioRouter.get("/usuarios", controller.getAll)
UsuarioRouter.get("/usuario/:id", controller.getById)

export { UsuarioRouter };
