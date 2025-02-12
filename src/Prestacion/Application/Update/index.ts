import { PrestacionRepository } from '../../Domain/Entities/PrestacionRepository';
import { PrestacionPrimitive } from '../../Domain/Interfaces/PrestacionPrimitive';

export class UpdatePrestacion {
  public constructor(private readonly prestacionRepo: PrestacionRepository) {}

  public async run(id: number, prestacion: PrestacionPrimitive): Promise<void> {
    await this.prestacionRepo.getById(id);

    await this.prestacionRepo.update(id, prestacion);
  }
}
