import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFound';
import { PeriodoVacacionalRepository } from '../../Domain/Entities/PeriodoVacacionalRepository';
import { PeriodoVacacionalPrimitive } from '../../Domain/Interfaces/PeriodoVacionalPrimitive';
import { PeriodoVacacional } from '../../Domain/Entities/PeriodoVacacional';

export class UpdatePeriodoVacacional {
  public constructor(private readonly periodoVacacionalRepo: PeriodoVacacionalRepository) {}

  public async run(
    id: number,
    periodoVacacional: Partial<Omit<PeriodoVacacionalPrimitive, 'id'>>,
  ): Promise<void> {
    const periodoVacacionalToUpdate = await this.periodoVacacionalRepo.getById(id);

    if (!periodoVacacionalToUpdate) {
      throw new NotFoundException({
        message: 'No se encontro el periodo vacacional',
        campo: 'periodo_vacacional_id',
        data: id,
      });
    }

    const newPeriodoVacacional = new PeriodoVacacional(
      periodoVacacional.anio ?? periodoVacacionalToUpdate.anio,
      periodoVacacional.dias_disponibles ?? periodoVacacionalToUpdate.dias_disponibles,
      periodoVacacional.dias_tomados ?? periodoVacacionalToUpdate.dias_tomados,
      periodoVacacional.dias_pendientes ?? periodoVacacionalToUpdate.dias_pendientes,
      id,
    );

    await this.periodoVacacionalRepo.update(id, newPeriodoVacacional.toPrimitive());
  }
}
