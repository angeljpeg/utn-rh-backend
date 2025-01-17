import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "./ServiceContainer";

export class ExpressUsuarioController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      ServiceContainer.create.run(body);

      res.status(201);
    } catch (error) {
      next(error);
    }
  }
}
