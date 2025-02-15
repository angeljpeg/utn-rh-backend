import { PrestacionRepository } from '@/src/Prestacion/Domain/Entities/PrestacionRepository';
import { PrestacionSolicitudRepository } from '../../Domain/Entities/PrestacionSolicitudRepository';
import { EmpleadoRepository } from '@/src/Empleados/Domain/Entities/EmpleadoRepository';
import { CreateSolicitudPrestacion } from '../../Domain/Interfaces/CreateSolicitudPrestacion';
import { PrestacionSolicitud } from '../../Domain/Entities/PrestacionSolicitud';
import { PrestacionSolicitudId } from '../../Domain/Entities/PrestacionSolicitudId';
import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { PrestacionSolicitudFecha } from '../../Domain/Entities/PrestacionSolicitudFecha';
import { PrestacionId } from '@/src/Prestacion/Domain/Entities/PrestacionId';

export class CreatePrestacionSolicitud {
  public constructor(
    private readonly prestacionSolicitudRepo: PrestacionSolicitudRepository,
    private readonly prestacionRepo: PrestacionRepository,
    private readonly empleadoRepo: EmpleadoRepository,
  ) {}

  public async run({
    empleado,
    prestacion,
    aprobado_por,
    id,
  }: CreateSolicitudPrestacion): Promise<void> {
    await this.empleadoRepo.getById(empleado);
    await this.empleadoRepo.getById(aprobado_por);
    await this.prestacionRepo.getById(prestacion);
    const newPrestacionSolicitud = new PrestacionSolicitud(
      id ? new PrestacionSolicitudId(id) : PrestacionSolicitudId.random(),
      new EmpleadoNumero(empleado),
      new PrestacionId(prestacion),
      new PrestacionSolicitudFecha(new Date()),
      new EmpleadoNumero(aprobado_por),
    );
    await this.prestacionSolicitudRepo.create(newPrestacionSolicitud.toPrimitive());
  }
}
