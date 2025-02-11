import { PrestacionPrimitive } from './PrestacionPrimitive';

export type PrestacionCreateDto = Omit<PrestacionPrimitive, 'id'> & {
  id?: number;
  monto_maximo?: string;
  antiguedad_minima?: string;
};
