import { PeriodoVacacional } from '../../Domain/Entities/PeriodoVacacional';
import { PeriodoVacacionalId } from '../../Domain/Entities/PeriodoVacacionalId';
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
      periodo_vacacional_id
        ? new PeriodoVacacionalId(periodo_vacacional_id)
        : PeriodoVacacionalId.random(),
      anio,
      dias_disponibles,
      dias_tomados,
      dias_pendientes,
    );
    await this.periodoVacacionalRepo.create(newPeriodoVacacional);
  }
}
