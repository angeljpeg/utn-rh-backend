import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';

const { prestaciones } = ServiceContainer;

export class PrestacionController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await prestaciones.create.run(body);
      res.status(201).json({ message: 'Prestacion creada exitosamente' });
    } catch (error) {
      next(error);
    }
  }
}
