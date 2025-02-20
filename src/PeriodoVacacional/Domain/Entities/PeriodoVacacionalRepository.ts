import { PeriodoVacacionalPrimitive } from '../Interfaces/PeriodoVacionalPrimitive';

export interface PeriodoVacacionalRepository {
  create(periodoVacacional: PeriodoVacacionalPrimitive): Promise<void>;
}
