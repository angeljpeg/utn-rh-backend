import { ServiceContainer } from "@/src/Shared/Infrastructure/ServiceContainer";
import { NextFunction, Request, Response } from "express";
import { ParentescoPrimitive } from "../Domain/Interfaces/ParentescoPrimitive";

export class ParentescoController {
    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
      try {
        const body = req.body;
        await ServiceContainer.Parentesco.create.run(body);
        res.status(201).json({ message: 'Parentesco creado exitosamente' });
      } catch (error) {
        next(error);
      }
    }

    public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
      try {
        const { page = 0, perPage = 10, order = 'asc', orderBy = 'id' } = req.query;
        const parentescos = await ServiceContainer.Parentesco.getAll.run({
          page: Number(page),
          perPage: Number(perPage),
          order: order as 'asc' | 'desc',
          orderBy: orderBy as keyof ParentescoPrimitive,
        });
        res.status(200).json(parentescos);
      } catch (error) {
        next(error);
      }
    }
    
}

