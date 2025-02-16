import { PrestacionSolicitudPrimitive } from '../Domain/Interfaces/PrestacionSolicitudPrimitive';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
import { NextFunction, Request, Response } from 'express';

export class PrestacionSolicitudController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await ServiceContainer.SolicitudPrestacion.create.run(body);
      res.status(201).json({ message: 'PrestacionSolicitud creada exitosamente' });
    } catch (error) {
      next(error);
    }
  }
  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { page = 0, perPage = 10, order = 'asc', orderBy = 'id' } = req.query;
      const prestacionesSolicitud = await ServiceContainer.SolicitudPrestacion.getAll.run({
        page: Number(page),
        perPage: Number(perPage),
        order: order as 'asc' | 'desc',
        orderBy: orderBy as keyof PrestacionSolicitudPrimitive,
      });

      res.status(200).json(prestacionesSolicitud);
    } catch (error) {
      next(error);
    }
  }
  public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const prestacionSolicitud = await ServiceContainer.SolicitudPrestacion.getById.run(
        Number(id),
      );
      res.status(200).json(prestacionSolicitud);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const prestacionSolicitud = req.body;
      await ServiceContainer.SolicitudPrestacion.update.run(Number(id), prestacionSolicitud);
      res
        .status(200)
        .json({ message: `La prestacionSolicitud con el id ${id} fue actualizada exitosamente` });
    } catch (error) {
      next(error);
    }
  }
}
