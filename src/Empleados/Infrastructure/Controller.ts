import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
import { EmpleadoPrimitive } from '../Domain/Interfaces/EmpleadoPrimitive';

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

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page = 0, perPage = 10, order = 'asc', orderBy = 'id' } = req.query;
      const empleados = await ServiceContainer.Empleado.getAll.run({
        page: Number(page),
        perPage: Number(perPage),
        order: order as 'asc' | 'desc',
        orderBy: orderBy as keyof EmpleadoPrimitive,
      });
      res.status(200).json(empleados);
    } catch (error) {
      next(error);
    }
  }

  public async getbyId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const empleado = await ServiceContainer.Empleado.getById.run(Number(id));
      res.status(200).json(empleado);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const empleado = req.body;
      await ServiceContainer.Empleado.update.run(Number(id), empleado);
      res
        .status(200)
        .json({ message: `La empleado con el id ${id} fue actualizada exitosamente` });
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await ServiceContainer.Empleado.delete.run(Number(id));
      res
        .status(200)
        .json({ message: `La empleado con el id ${id} fue eliminada exitosamente` });
    } catch (error) {
      next(error);
    }
  }

}
