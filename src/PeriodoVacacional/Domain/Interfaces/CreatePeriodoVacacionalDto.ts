import { PeriodoVacacionalPrimitive } from './PeriodoVacionalPrimitive';

export interface CreatePeriodoVacacionalDto
  extends Partial<Omit<PeriodoVacacionalPrimitive, 'id'>> {
  id?: number;
}
