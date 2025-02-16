import { PrestacionSolicitudPrimitive } from './PrestacionSolicitudPrimitive';

export type UpdateSolicitudPrestacionDto = Partial<
  Omit<PrestacionSolicitudPrimitive, 'id' | 'fecha_solicitud'>
>;
