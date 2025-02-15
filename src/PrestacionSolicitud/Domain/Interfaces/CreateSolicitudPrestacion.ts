import { PrestacionSolicitudPrimitive } from './PrestacionSolicitudPrimitive';

export interface CreateSolicitudPrestacion
  extends Omit<PrestacionSolicitudPrimitive, 'id' | 'fecha_solicitud'> {
  id?: number;
}
