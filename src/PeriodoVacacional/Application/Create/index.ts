import { PeriodoVacacional } from '../../Domain/Entities/PeriodoVacacional';
import { PeriodoVacacionalRepository } from '../../Domain/Entities/PeriodoVacacionalRepository';
import { CreatePeriodoVacacionalDto } from '../../Domain/Interfaces/CreatePeriodoVacacionalDto';

export class CreatePeriodoVacacional {
  public constructor(private readonly periodoVacacionalRepo: PeriodoVacacionalRepository) {}

  public async run({
    anio,
    dias_disponibles,
    dias_tomados,
    dias_pendientes,
    periodo_vacacional_id,
  }: CreatePeriodoVacacionalDto): Promise<void> {
    const newPeriodoVacacional = new PeriodoVacacional(
      anio ?? new Date().getFullYear(),
      dias_disponibles ?? 20,
      dias_tomados ?? 0,
      dias_pendientes ?? 0,
      periodo_vacacional_id,
    );

    await this.periodoVacacionalRepo.create(newPeriodoVacacional.toPrimitive());
  }
}
