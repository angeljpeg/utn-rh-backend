import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "./ServiceContainer";

export class ExpressUsuarioController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      await ServiceContainer.create.run(body);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const usuarios = await ServiceContainer.getAll.run();
      res.status(200).json(usuarios);
    } catch (error) {
      next(error);
    }
  }
}
