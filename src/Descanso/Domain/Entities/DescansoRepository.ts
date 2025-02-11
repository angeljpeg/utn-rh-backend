import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { DescansoPrimitive } from '../Interface/DescansoPrimitive';

export interface DescansoRepository {
  create(descanso: Omit<DescansoPrimitive, 'id'>): Promise<void>;
  getAll(query: IQuery<DescansoPrimitive>): Promise<DescansoPrimitive[]>;
  getById(id: number): Promise<DescansoPrimitive | null>;
  update(id: number, descanso: DescansoPrimitive): Promise<void>;
  delete(id: number): Promise<void>;
}
