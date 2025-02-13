import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFound';
import { ParentescoId } from '../../Domain/Entities/ParentescoId';
import { ParentescoRepository } from '../../Domain/Entities/ParentescoRepository';
import { ParentescoPrimitive } from '../../Domain/Interfaces/ParentescoPrimitive';

export class GetParentescoById {
  public constructor(private readonly parentescoRepo: ParentescoRepository) {}

  public async run(id: number): Promise<ParentescoPrimitive | null> {
    const parentescoId = new ParentescoId(id);
    const parentesco = await this.parentescoRepo.getById(parentescoId.value);
    if (!parentesco) {
      throw new NotFoundException({
        message: `El parentesco con el id ${id} no fue encontrado`,
        campo: '/:id',
        data: id,
      });
    }
    return parentesco;
  }
}
