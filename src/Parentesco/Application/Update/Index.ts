import { ParentescoRepository } from "../../Domain/Entities/ParentescoRepository";
import { ParentescoPrimitive } from "../../Domain/Interfaces/ParentescoPrimitive";

export class UpdateParentesco {
    public constructor(private readonly parentescoRepo: ParentescoRepository) {}

    public async run(id: number, parentesco: ParentescoPrimitive): Promise<void> {
        await this.parentescoRepo.getById(id);
        await this.parentescoRepo.update(id, parentesco);
      
    }
    
}