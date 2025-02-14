import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';
import { DiasDescansoId } from '../../Domain/Entities/DiasDescansoId';
import { DiasDescansoPrimitive } from '../../Domain/Interface/DiasDescansoPrimitive';
import { DiasDescansoRepository } from '../../Domain/Entities/DiasDescansoRepository';

export class GetDiasDescansoById {
  public constructor(private readonly diasDescansoRepository: DiasDescansoRepository) {}

  public async run(id: number): Promise<DiasDescansoPrimitive | null> {
    const idConvertido = new DiasDescansoId(id);
    if (!id) {
      throw new BadRequest({
        message: 'El id del descanso es requerido',
        campo: '/:id',
        data: id,
      });
    }
    return (await this.diasDescansoRepository.getById(idConvertido.value)) ?? null;
  }
}
