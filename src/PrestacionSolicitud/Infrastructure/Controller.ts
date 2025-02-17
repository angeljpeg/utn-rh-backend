import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '@/src/Shared/Infrastructure/ServiceContainer';
import { PrestacionSolicitudPrimitive } from '../Domain/Interfaces/PrestacionSolicitudPrimitive';
const PrestacionSolicitud = ServiceContainer.SolicitudesPrestaciones;

export class PrestacionSolicitudController {
  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      await PrestacionSolicitud.create.run(body);
      res.status(201).json({ message: 'PrestacionSolicitud creada exitosamente' });
    } catch (error) {
      next(error);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { order = 'asc', orderBy = 'id', page = 0, perPage = 10 } = req.query;
      const allPrestacionSolicitud = await PrestacionSolicitud.getAll.run({
        order: order as 'asc' | 'desc',
        orderBy: orderBy as keyof PrestacionSolicitudPrimitive,
        page: Number(page),
        perPage: Number(perPage),
      });
      res.status(200).json(allPrestacionSolicitud);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const prestacionSolicitud = await PrestacionSolicitud.getById.run(Number(id));
      res.status(200).json(prestacionSolicitud);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const prestacionSolicitud = req.body;
      await PrestacionSolicitud.update.run(Number(id), prestacionSolicitud);
      res
        .status(200)
        .json({ message: `PrestacionSolicitud con el id ${id} actualizado exitosamente` });
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await PrestacionSolicitud.delete.run(Number(id));
      res
        .status(200)
        .json({ message: `PrestacionSolicitud con el id ${id} eliminado exitosamente` });
    } catch (error) {
      next(error);
    }
  }
}
