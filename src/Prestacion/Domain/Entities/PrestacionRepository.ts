import { PrestacionPrimitive } from '../Interfaces/PrestacionPrimitive';

export interface PrestacionRepository {
  create(prestacion: PrestacionPrimitive): Promise<void>;
}
