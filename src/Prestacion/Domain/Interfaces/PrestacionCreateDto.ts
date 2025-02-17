import { PrestacionPrimitive } from './PrestacionPrimitive';

export type PrestacionCreateDto = Omit<PrestacionPrimitive, 'id'> & {
  id?: number;
};
