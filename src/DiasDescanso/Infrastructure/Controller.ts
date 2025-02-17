import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
import { NextFunction, Request, Response } from 'express';
import { DiasDescansoPrimitive } from '../Domain/Interface/DiasDescansoPrimitive';

export class DiasDescansoController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await ServiceContainer.DiasDescanso.create.run(body);
      res.status(201).json({ message: 'Dias descanso creado exitosamente' });
    } catch (error) {
      next(error);
    }
  }
  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page = 0, perPage = 10, order = 'asc', orderBy = 'id' } = req.query;
      const diasDescansos = await ServiceContainer.DiasDescanso.getAll.run({
        page: Number(page),
        perPage: Number(perPage),
        order: order as 'asc' | 'desc',
        orderBy: orderBy as keyof DiasDescansoPrimitive,
      });
      res.status(200).json(diasDescansos);
    } catch (error) {
      next(error);
    }
  }
  public async getbyId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const diasDescanso = await ServiceContainer.DiasDescanso.getById.run(Number(id));
      res.status(200).json(diasDescanso);
    } catch (error) {
      next(error);
    }
  }
  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const diasDescanso = req.body;
      await ServiceContainer.DiasDescanso.update.run(Number(id), diasDescanso);
      res.status(200).json({ message: `Dias descanso con el id ${id} actualizado exitosamente` });
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await ServiceContainer.DiasDescanso.delete.run(Number(id));
      res.status(200).json({ message: 'Dias descanso eliminada exitosamente' });
    } catch (error) {
      next(error);
    }
  }
}
