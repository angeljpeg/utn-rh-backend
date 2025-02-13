import { ServiceContainer } from "@/src/Shared/Infrastructure/ServiceContainer";
import { NextFunction, Request, Response } from "express";

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

}

