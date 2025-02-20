import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFound';
import { PeriodoVacacionalRepository } from '../../Domain/Entities/PeriodoVacacionalRepository';

export class DeletePeriodoVacacional {
  public constructor(private readonly periodoVacacionalRepo: PeriodoVacacionalRepository) {}

  public async run(id: number): Promise<void> {
    const periodoVacacional = await this.periodoVacacionalRepo.getById(id);
    if (!periodoVacacional) {
      throw new NotFoundException({
        message: 'No se encontro el periodo vacacional',
        campo: 'periodo_vacacional_id',
        data: id,
      });
    }
    await this.periodoVacacionalRepo.delete(id);
  }
}
