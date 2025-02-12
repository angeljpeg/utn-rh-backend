import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
import { NextFunction, Request, Response } from 'express';
import { DescansoPrimitive } from '../Domain/Interface/DescansoPrimitive';

const { descansos: Descanso } = ServiceContainer;

export class DescansoController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await Descanso.create.run(body);
      res.status(201).json({ message: 'Descanso creada exitosamente' });
    } catch (error) {
      next(error);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { order = 'asc', orderBy = 'id', page = 0, perPage = 10 } = req.query;
      const allDescansos = await Descanso.getAll.run({
        order: order as 'asc' | 'desc',
        orderBy: orderBy as keyof DescansoPrimitive,
        page: Number(page),
        perPage: Number(perPage),
      });
      res.status(200).json(allDescansos);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const descanso = await Descanso.getById.run(Number(id));
      res.status(200).json(descanso);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const descanso = req.body;
      await Descanso.update.run(Number(id), descanso);
      res.status(200).json({ message: `Descanso con el id ${id} actualizado exitosamente` });
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await Descanso.delete.run(Number(id));
      res.status(200).json({ message: 'Descanso eliminada exitosamente' });
    } catch (error) {
      next(error);
    }
  }
}
