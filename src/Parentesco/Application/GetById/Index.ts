import { ParentescoId } from "../../Domain/Entities/ParenetescoId";
import { ParentescoRepository } from "../../Domain/Entities/ParentescoRepository";
import { ParentescoPrimitive } from "../../Domain/Interfaces/ParentescoPrimitive";

export class GetParentescoById {
    public constructor(private readonly parentescoRepo: ParentescoRepository) {}

    public async run(id: number): Promise<ParentescoPrimitive | null> {
        const parentescoId = new ParentescoId(id);
        const parentesco = await this.parentescoRepo.getById(parentescoId.value);
        return parentesco;          
    }
}
