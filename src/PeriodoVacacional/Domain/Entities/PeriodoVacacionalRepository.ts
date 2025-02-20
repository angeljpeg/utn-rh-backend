import { PeriodoVacacionalPrimitive } from '../Interfaces/PeriodoVacionalPrimitive';

export interface PeriodoVacacionalRepository {
  create(periodoVacacional: PeriodoVacacionalPrimitive): Promise<void>;
  getById(id: number): Promise<PeriodoVacacionalPrimitive>;
  update(id: number, periodoVacacional: PeriodoVacacionalPrimitive): Promise<void>;
  delete(id: number): Promise<void>;
}
