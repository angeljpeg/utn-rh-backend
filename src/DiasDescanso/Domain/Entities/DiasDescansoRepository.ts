import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { DiasDescansoPrimitive } from '../Interface/DiasDescansoPrimitive';

export interface DiasDescansoRepository {
  create(descanso: Omit<DiasDescansoPrimitive, 'id'>): Promise<void>;
  getAll(query: IQuery<DiasDescansoPrimitive>): Promise<DiasDescansoPrimitive[]>;
  getById(id: number): Promise<DiasDescansoPrimitive | null>;
  update(id: number, descanso: DiasDescansoPrimitive): Promise<void>;
  delete(id: number): Promise<void>;
}
