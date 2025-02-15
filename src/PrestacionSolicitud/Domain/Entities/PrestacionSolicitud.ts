import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { PrestacionSolicitudId } from './PrestacionSolicitudId';
import { PrestacionId } from '@/src/Prestacion/Domain/Entities/PrestacionId';
import { PrestacionSolicitudFecha } from './PrestacionSolicitudFecha';
import { PrestacionSolicitudPrimitive } from '../Interfaces/PrestacionSolicitudPrimitive';

export class PrestacionSolicitud {
  public SolicitudId: PrestacionSolicitudId;
  public EmpleadoId: EmpleadoNumero;
  public PrestacionId: PrestacionId;
  public FechaSolicitud: PrestacionSolicitudFecha;
  public AprobadoPor: EmpleadoNumero;
  public constructor(
    id: PrestacionSolicitudId,
    empleado: EmpleadoNumero,
    prestacion: PrestacionId,
    fechasolicitud: PrestacionSolicitudFecha,
    aprobadopor: EmpleadoNumero,
  ) {
    this.SolicitudId = id;
    this.EmpleadoId = empleado;
    this.PrestacionId = prestacion;
    this.FechaSolicitud = fechasolicitud;
    this.AprobadoPor = aprobadopor;
  }

  public toPrimitive(): PrestacionSolicitudPrimitive {
    return {
      id: this.SolicitudId.value,
      empleado: this.EmpleadoId.value,
      prestacion: this.PrestacionId.value,
      fecha_solicitud: this.FechaSolicitud.value,
      aprobado_por: this.AprobadoPor.value,
    };
  }
}
