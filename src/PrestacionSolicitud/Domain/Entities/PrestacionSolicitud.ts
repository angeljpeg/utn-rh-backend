import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { PrestacionSolicitudId } from './PrestacionSolicitudId';
import { PrestacionId } from '@/src/Prestacion/Domain/Entities/PrestacionId';
import { PrestacionSolicitudFecha } from './PrestacionSolicitudFecha';
import { PrestacionSolicitudPrimitive } from '../Interfaces/PrestacionSolicitudPrimitive';
import { PrestacionSolicitudEstatus } from './PrestacionSolicitudEstatus';
import { EstatusType } from '@/src/Shared/Domain/Interfaces/Estatus';

export class PrestacionSolicitud {
  public SolicitudId: PrestacionSolicitudId;
  public EmpleadoId: EmpleadoNumero;
  public PrestacionId: PrestacionId;
  public FechaSolicitud: PrestacionSolicitudFecha;
  public AprobadoPor: EmpleadoNumero;
  public Estatus: PrestacionSolicitudEstatus;
  public constructor(
    id: PrestacionSolicitudId,
    empleado: EmpleadoNumero,
    prestacion: PrestacionId,
    fechasolicitud: PrestacionSolicitudFecha,
    aprobadopor: EmpleadoNumero,
    estatus: PrestacionSolicitudEstatus,
  ) {
    this.SolicitudId = id;
    this.EmpleadoId = empleado;
    this.PrestacionId = prestacion;
    this.FechaSolicitud = fechasolicitud;
    this.AprobadoPor = aprobadopor;
    this.Estatus = estatus;
  }

  public toPrimitive(): PrestacionSolicitudPrimitive {
    return {
      id: this.SolicitudId.value,
      empleado_id: this.EmpleadoId.value,
      prestacion_id: this.PrestacionId.value,
      fecha_solicitud: this.FechaSolicitud.value,
      aprobado_por: this.AprobadoPor.value,
      estatus: this.Estatus.value as EstatusType,
    };
  }
}
