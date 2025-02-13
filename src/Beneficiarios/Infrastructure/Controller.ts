import { ServiceContainer } from "@/src/Shared/Infrastructure/ServiceContainer";
import { NextFunction , Response , Request } from "express";
import { BeneficiarioPrimitive } from "../Domain/Interface/BeneficiarioPrimitive";

export class BeneficiarioController {
    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;
              await ServiceContainer.Beneficiarios.create.run(body);
            res.status(201).json({ message: 'Beneficiario creado exitosamente' });
        } catch (error) {
            next(error);
        }
    }

    public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { order = 'asc', orderBy = 'id', page = 0, perPage = 10 } = req.query;
            const allBeneficiarios = await ServiceContainer.Beneficiarios.getAll.run({
                order: order as 'asc' | 'desc',
                orderBy: orderBy as keyof BeneficiarioPrimitive,
                page: Number(page),
                perPage: Number(perPage),
            });
            res.status(200).json(allBeneficiarios);
        } catch (error) {
            next(error);
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const beneficiario = await ServiceContainer.Beneficiarios.getById.run(Number(id));
            res.status(200).json(beneficiario);
        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction): Promise<void> {   
        try {
            const { id } = req.params;
            const beneficiario = req.body;
            await ServiceContainer.Beneficiarios.update.run(Number(id), beneficiario);
            res.status(200).json({ message: `Beneficiario con el id ${id} actualizado exitosamente` }); 
        } catch (error) {
            next(error);
        }

    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            await ServiceContainer.Beneficiarios.delete.run(Number(id));
            res.status(200).json({ message: `Beneficiario con el id ${id} eliminada exitosamente` });
        } catch (error) {
            next(error);
        }
    }
}