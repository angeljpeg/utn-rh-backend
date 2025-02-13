import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
import { PrestacionPrimitive } from '../Domain/Interfaces/PrestacionPrimitive';

const { Prestaciones: Prestacion } = ServiceContainer;

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
      const { page = 1, perPage = 10, order = 'asc', orderBy = 'id' } = req.query;
      const prestaciones = await Prestacion.getAll.run({
        page: Number(page),
        perPage: Number(perPage),
        order: order as 'asc' | 'desc',
        orderBy: orderBy as keyof PrestacionPrimitive,
      });

      res.status(200).json(prestaciones);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const prestacion = await Prestacion.getById.run(Number(id));
      res.status(200).json(prestacion);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const prestacion = req.body;
      await Prestacion.update.run(Number(id), prestacion);
      res
        .status(200)
        .json({ message: `La prestacion con el id ${id} fue actualizada exitosamente` });
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await Prestacion.delete.run(Number(id));
      res.status(200).json({ message: `La prestacion con el id ${id} fue eliminada exitosamente` });
    } catch (error) {
      next(error);
    }
  }
}
