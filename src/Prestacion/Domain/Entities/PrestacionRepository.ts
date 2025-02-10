import { Prestacion } from './Prestacion';

export interface PrestacionRepository {
  save(prestacion: Prestacion): Promise<void>;
}
