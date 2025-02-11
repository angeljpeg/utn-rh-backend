import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFound';
import { PrestacionRepository } from '../../Domain/Entities/PrestacionRepository';

export class DeletePrestacion {
  public constructor(private readonly prestacionRepo: PrestacionRepository) {}
  public async run(id: number): Promise<void> {
    const prestacionEncontrada = await this.prestacionRepo.getById(id);
    if (!prestacionEncontrada) {
      throw new NotFoundException({
        message: `La prestacion con el id ${id} no fue encontrada`,
        campo: '/:id',
        data: id,
      });
    }
    await this.prestacionRepo.delete(id);
  }
}
