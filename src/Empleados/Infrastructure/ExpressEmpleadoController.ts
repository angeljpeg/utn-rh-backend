import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
import { NextFunction, Request, Response } from 'express';

export class ExpressEmpleadoController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await ServiceContainer.empleado.create.run(body);
      res.status(201).send();
    } catch (error) {
      if (error instanceof InvalidDataException) {
        res.status(400).json(error);
      }
      next(error);
    }
  }
}
