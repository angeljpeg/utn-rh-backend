import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
//import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';

const { prestaciones: Prestacion } = ServiceContainer;

export class PrestacionController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await Prestacion.create.run(body);
      res.status(201).json({ message: 'Prestacion creada exitosamente' });
    } catch (error) {
      next(error);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const page = 0;
      const perPage = 0;
      const prestaciones = await Prestacion.getAll.run({ page, perPage });

      res.status(200).json(prestaciones);
    } catch (error) {
      next(error);
    }
  }
}
