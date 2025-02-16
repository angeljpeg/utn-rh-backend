import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { PrestacionSolicitudPrimitive } from '../Interfaces/PrestacionSolicitudPrimitive';

export interface PrestacionSolicitudRepository {
  create(prestacionSolicitud: PrestacionSolicitudPrimitive): Promise<void>;
  update(prestacionSolicitud: PrestacionSolicitudPrimitive): Promise<void>;
  getById(id: number): Promise<PrestacionSolicitudPrimitive>;
  getAll(query: IQuery<PrestacionSolicitudPrimitive>): Promise<PrestacionSolicitudPrimitive[]>;
}
