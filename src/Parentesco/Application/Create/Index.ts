import { ParentescoId } from '../../Domain/Entities/ParentescoId';
import { Parentesco } from '../../Domain/Entities/Parentesco';
import { ParentescoGrado } from '../../Domain/Entities/ParentescoGrado';
import { ParentescoNombre } from '../../Domain/Entities/ParentescoNombre';
import { ParentescoRepository } from '../../Domain/Entities/ParentescoRepository';
import { ParentescoCreateDto } from '../../Domain/Interfaces/ParentescoCreateDto';

export class CreateParentesco {
  public constructor(public readonly parentescoRepo: ParentescoRepository) {}

  public async run({ id, nombre, grado }: ParentescoCreateDto): Promise<void> {
    const parentesco = new Parentesco(
      id ? new ParentescoId(id) : ParentescoId.random(),
      new ParentescoNombre(nombre),
      new ParentescoGrado(grado),
    );

    await this.parentescoRepo.create(parentesco.toParentescoPrimitive());
  }
}
