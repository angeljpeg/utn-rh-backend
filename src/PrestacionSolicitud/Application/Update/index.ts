import { PrestacionRepository } from '@/src/Prestacion/Domain/Entities/PrestacionRepository';
import { PrestacionSolicitudRepository } from '../../Domain/Entities/PrestacionSolicitudRepository';
import { EmpleadoRepository } from '@/src/Empleados/Domain/Entities/EmpleadoRepository';
import { PrestacionSolicitudId } from '../../Domain/Entities/PrestacionSolicitudId';
import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { PrestacionId } from '@/src/Prestacion/Domain/Entities/PrestacionId';
import { PrestacionSolicitudFecha } from '../../Domain/Entities/PrestacionSolicitudFecha';
import { PrestacionSolicitud } from '../../Domain/Entities/PrestacionSolicitud';
import { UpdateSolicitudPrestacionDto } from '../../Domain/Interfaces/UpdateSolicitudPrestacion';

export class UpdatePrestacionSolicitud {
  public constructor(
    private readonly prestacionSolicitudRepo: PrestacionSolicitudRepository,
    private readonly prestacionRepo: PrestacionRepository,
    private readonly empleadoRepo: EmpleadoRepository,
  ) {}

  public async run(
    id: number,
    { empleado, prestacion, aprobado_por }: UpdateSolicitudPrestacionDto,
  ): Promise<void> {
    const prestacionSolicitudId = new PrestacionSolicitudId(id);

    const solicitudVieja = await this.prestacionSolicitudRepo.findById(prestacionSolicitudId.value);

    if (empleado) await this.empleadoRepo.getById(empleado);
    if (aprobado_por) await this.empleadoRepo.getById(aprobado_por);
    if (prestacion) await this.prestacionRepo.getById(prestacion);

    const newPrestacionSolicitud = new PrestacionSolicitud(
      new PrestacionSolicitudId(prestacionSolicitudId.value),
      new EmpleadoNumero(empleado ? empleado : solicitudVieja.empleado),
      new PrestacionId(prestacion ? prestacion : solicitudVieja.prestacion),
      new PrestacionSolicitudFecha(new Date(solicitudVieja.fecha_solicitud)),
      new EmpleadoNumero(aprobado_por ? aprobado_por : solicitudVieja.aprobado_por),
    );
    await this.prestacionSolicitudRepo.update(newPrestacionSolicitud.toPrimitive());
  }
}
