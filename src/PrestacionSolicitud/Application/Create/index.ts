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
import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

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
    const empleado = await this.empleadoRepo.getById(empleado_id);
    if (!empleado) {
      throw new BadRequest({
        message: 'El empleado no existe',
        campo: 'empleado_id',
        data: empleado_id,
      });
    }

    const aprobador = await this.empleadoRepo.getById(aprobado_por);
    if (!aprobador) {
      throw new BadRequest({
        message: 'El empleado aprobador no existe',
        campo: 'aprobado_por',
        data: aprobado_por,
      });
    }

    const prestacion = await this.prestacionRepo.getById(prestacion_id);
    if (!prestacion) {
      throw new BadRequest({
        message: 'La prestación no existe',
        campo: 'prestacion_id',
        data: prestacion_id,
      });
    }

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
