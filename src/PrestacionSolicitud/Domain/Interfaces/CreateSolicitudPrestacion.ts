import { PrestacionSolicitudPrimitive } from './PrestacionSolicitudPrimitive';

export interface CreateSolicitudPrestacion
  extends Omit<PrestacionSolicitudPrimitive, 'id' | 'fecha_solicitud' | 'estatus'> {
  id?: number;
}
