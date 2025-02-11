import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { PrestacionPrimitive } from '../Interfaces/PrestacionPrimitive';

export interface PrestacionRepository {
  create(prestacion: PrestacionPrimitive): Promise<void>;
  getAll(query: IQuery<PrestacionPrimitive>): Promise<PrestacionPrimitive[]>;
  getById(id: number): Promise<PrestacionPrimitive | null>;
  update(id: number, prestacion: PrestacionPrimitive): Promise<void>;
}
