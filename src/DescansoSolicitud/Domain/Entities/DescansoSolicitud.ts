import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { DescansoSolicitudId } from './DescansoSolicitudId';
import { DescansoSolicitudFechaInicio } from './DescansoSolicitudFechaInicio';
import { DescansoSolicitudFechaFinal } from './DescansoSolicitudFechaFinal';
import { DescansoSolicitudEstatus } from './DescansoSolicitudEstatus';

export class DescansoSolicitud {
  public DescansoSolicitudId: DescansoSolicitudId;
  public EmpleadoId: EmpleadoNumero;
  public FechaInicio: DescansoSolicitudFechaInicio;
  public FechaFinal: DescansoSolicitudFechaFinal;
  public Estatus: DescansoSolicitudEstatus;
  public AprobadoPor: EmpleadoNumero;
  public constructor(
    id: DescansoSolicitudId,
    empleado: EmpleadoNumero,
    fechainicio: DescansoSolicitudFechaInicio,
    fechafinal: DescansoSolicitudFechaFinal,
    estatus: DescansoSolicitudEstatus,
    aprobadopor: EmpleadoNumero,
  ) {
    this.DescansoSolicitudId = id;
    this.EmpleadoId = empleado;
    this.FechaInicio = fechainicio;
    this.FechaFinal = fechafinal;
    this.Estatus = estatus;
    this.AprobadoPor = aprobadopor;
  }
}
