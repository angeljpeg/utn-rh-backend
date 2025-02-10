import { Prestacion } from './Prestacion';

export interface PrestacionRepository {
  create(prestacion: Prestacion): Promise<void>;
}
