import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';
import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFoundException';

export class ExpressUsuarioController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await ServiceContainer.usuario.create.run(body);
      res.status(201).send();
    } catch (error) {
      if (error instanceof InvalidDataException) {
        res.status(400).json(error);
      }
      next(error);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const usuarios = await ServiceContainer.usuario.getAll.run();
      res.status(200).json(usuarios);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id;
      const usuario = await ServiceContainer.usuario.getOneById.run(id);
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

  public async getOneBy(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { campo, value } = req.params;
      const usuario = await ServiceContainer.usuario.getOneBy.run(campo, value);
      res.status(200).json(usuario);
    } catch (error) {
      if (error instanceof InvalidDataException) {
        res.status(400).json(error);
      }
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id;
      const usuario = await ServiceContainer.usuario.getOneById.run(id);
      const body = req.body;

      await ServiceContainer.usuario.update.run(body, id);
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

  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id;
      await ServiceContainer.usuario.delete.run(id);
      res.status(200).send();
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

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { matricula, password } = req.body;
      const usuario = await ServiceContainer.usuario.login.run(matricula, password);
      res.status(200).json({ token: 'token', usuario });
    } catch (error) {
      if (error instanceof InvalidDataException) {
        res.status(400).json(error);
      }
      next(error);
    }
  }
}
