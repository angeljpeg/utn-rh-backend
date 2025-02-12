import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';

export class EmpleadoController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await ServiceContainer.Empleado.create.run(body);
      res.status(201).json({ message: 'Empleado creado exitosamente' });
    } catch (error) {
      next(error);
    }
  }
}
