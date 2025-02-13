import { EmpleadoPrimitive } from './EmpleadoPrimitive';

export interface EmpleadoCreateDto extends Omit<EmpleadoPrimitive, 'id' | 'antiguedad'> {
  id?: number;
}
