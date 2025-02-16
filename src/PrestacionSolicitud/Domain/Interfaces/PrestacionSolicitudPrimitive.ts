export interface PrestacionSolicitudPrimitive {
  id: number;
  empleado_id: number;
  prestacion_id: number;
  fecha_solicitud: Date;
  aprobado_por: number;
  estatus: 'APROBADO' | 'PENDIENTE' | 'RECHAZADO';
}
