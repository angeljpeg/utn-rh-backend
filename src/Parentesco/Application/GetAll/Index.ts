import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { ParentescoRepository } from "../../Domain/Entities/ParentescoRepository";
import { ParentescoPrimitive } from "../../Domain/Interfaces/ParentescoPrimitive";

export class GetAllParentesco {
    public constructor(private readonly parentescoRepo: ParentescoRepository) {}
    public async run(query: IQuery<ParentescoPrimitive>): Promise<ParentescoPrimitive[]> {
        const parentescos = await this.parentescoRepo.getAll(query);
        return parentescos;
    }
}