import { PrestacionRepository } from '@/src/Prestacion/Domain/Entities/PrestacionRepository';
import { PrestacionSolicitudRepository } from '../../Domain/Entities/PrestacionSolicitudRepository';
import { EmpleadoRepository } from '@/src/Empleados/Domain/Entities/EmpleadoRepository';
import { CreateSolicitudPrestacion } from '../../Domain/Interfaces/CreateSolicitudPrestacion';
import { PrestacionSolicitud } from '../../Domain/Entities/PrestacionSolicitud';
import { PrestacionSolicitudId } from '../../Domain/Entities/PrestacionSolicitudId';
import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { PrestacionSolicitudFecha } from '../../Domain/Entities/PrestacionSolicitudFecha';
import { PrestacionId } from '@/src/Prestacion/Domain/Entities/PrestacionId';
import { PrestacionSolicitudEstatus } from '../../Domain/Entities/PrestacionSolicitudEstatus';

export class CreatePrestacionSolicitud {
  public constructor(
    private readonly prestacionSolicitudRepo: PrestacionSolicitudRepository,
    private readonly prestacionRepo: PrestacionRepository,
    private readonly empleadoRepo: EmpleadoRepository,
  ) {}

  public async run({
    empleado_id,
    prestacion_id,
    aprobado_por,
    id,
  }: CreateSolicitudPrestacion): Promise<void> {
    await this.empleadoRepo.getById(empleado_id);
    await this.empleadoRepo.getById(aprobado_por);
    await this.prestacionRepo.getById(prestacion_id);
    const newPrestacionSolicitud = new PrestacionSolicitud(
      id ? new PrestacionSolicitudId(id) : PrestacionSolicitudId.random(),
      new EmpleadoNumero(empleado_id),
      new PrestacionId(prestacion_id),
      new PrestacionSolicitudFecha(new Date()),
      new EmpleadoNumero(aprobado_por),
      new PrestacionSolicitudEstatus('PENDIENTE'),
    );
    await this.prestacionSolicitudRepo.create(newPrestacionSolicitud.toPrimitive());
  }
}
