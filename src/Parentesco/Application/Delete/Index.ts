import { ParentescoRepository } from "../../Domain/Entities/ParentescoRepository";

export class DeleteParentesco {
    public constructor(private readonly parentescoRepo: ParentescoRepository) {}
    
    public async run(id: number): Promise<void> {
        await this.parentescoRepo.getById(id);
        await this.parentescoRepo.delete(id);
    }
}   