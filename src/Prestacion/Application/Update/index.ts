import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFound';
import { PrestacionRepository } from '../../Domain/Entities/PrestacionRepository';
import { PrestacionPrimitive } from '../../Domain/Interfaces/PrestacionPrimitive';

export class UpdatePrestacion {
  public constructor(private readonly prestacionRepo: PrestacionRepository) {}

  public async run(id: number, prestacion: PrestacionPrimitive): Promise<void> {
    const prestacionEncontrada = await this.prestacionRepo.getById(id);
    if (!prestacionEncontrada) {
      throw new NotFoundException({
        message: `La prestacion con el id ${id} no fue encontrada`,
        campo: '/:id',
        data: id,
      });
    }
    await this.prestacionRepo.update(id, prestacion);
  }
}
