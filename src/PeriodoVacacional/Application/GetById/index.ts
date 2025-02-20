import { PeriodoVacacionalRepository } from '../../Domain/Entities/PeriodoVacacionalRepository';
import { PeriodoVacacionalPrimitive } from '../../Domain/Interfaces/PeriodoVacionalPrimitive';

export class GetPeriodoVacacionalById {
  public constructor(private readonly periodoVacacionalRepo: PeriodoVacacionalRepository) {}

  public async run(id: number): Promise<PeriodoVacacionalPrimitive> {
    return this.periodoVacacionalRepo.getById(id);
  }
}
