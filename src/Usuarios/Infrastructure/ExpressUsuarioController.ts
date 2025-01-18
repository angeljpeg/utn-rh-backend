import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "./ServiceContainer";
import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";
import { NotFoundException } from "@/src/Shared/Domain/Exceptions/NotFoundException";

export class ExpressUsuarioController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      await ServiceContainer.create.run(body);
      res.status(201).send();
    } catch (error) {
      if (error instanceof InvalidDataException) {
        res.status(400).json(error);
      }
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

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const usuario = await ServiceContainer.getById.run(id);
      res.status(200).json(usuario);
    } catch (error) {
      if (error instanceof InvalidDataException) {
        res.status(400).json(error);
      }
      if (error instanceof NotFoundException) {
        res.status(404).json(error);
      }
      next(error);
    }
  }
}
