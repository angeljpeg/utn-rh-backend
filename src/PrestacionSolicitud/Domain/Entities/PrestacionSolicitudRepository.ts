import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { PrestacionSolicitudPrimitive } from '../Interfaces/PrestacionSolicitudPrimitive';

export interface PrestacionSolicitudRepository {
  create(prestacionSolicitud: PrestacionSolicitudPrimitive): Promise<void>;
  update(prestacionSolicitud: PrestacionSolicitudPrimitive): Promise<void>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<PrestacionSolicitudPrimitive>;
  findAll(query: IQuery<PrestacionSolicitudPrimitive>): Promise<PrestacionSolicitudPrimitive[]>;
}
