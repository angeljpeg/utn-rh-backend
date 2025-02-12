import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFound';
import { DescansoRepository } from '../../Domain/Entities/DescansoRepository';
import { DescansoPrimitive } from '../../Domain/Interface/DescansoPrimitive';
import { DescansoId } from '../../Domain/Entities/DescansoId';

export class GetDescansoById {
  public constructor(private readonly descansoRepo: DescansoRepository) {}

  public async run(id: number): Promise<DescansoPrimitive | null> {
    const idConvertido = new DescansoId(id);
    const descansoEncontrado = await this.descansoRepo.getById(idConvertido.value);

    if (!descansoEncontrado) {
      throw new NotFoundException({
        message: `El descanso con el id ${id} no fue encontrado`,
        campo: '/:id',
        data: id,
      });
    }

    return descansoEncontrado;
  }
}
