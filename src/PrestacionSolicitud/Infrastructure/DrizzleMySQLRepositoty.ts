import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { PrestacionSolicitudPrimitive } from '../Domain/Interfaces/PrestacionSolicitudPrimitive';
import { SolicitudPrestacionSchema as solicitud_prestacion } from '@/src/Database/Infrastructure/Drizzle/schemas/SolicitudPrestacionSchema';
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { asc, desc, eq } from 'drizzle-orm';
import { PrestacionSolicitudRepository } from '../Domain/Entities/PrestacionSolicitudRepository';

export class SolicitudPrestacionMySQLRepository implements PrestacionSolicitudRepository{
  public async create(
    prestacionSolicitud: Omit<PrestacionSolicitudPrimitive, 'id'>,
  ): Promise<void> {
    await db.insert(solicitud_prestacion).values({
      empleado_id: prestacionSolicitud.empleado_id,
      prestacion_id: prestacionSolicitud.prestacion_id,
      fecha_solicitud: prestacionSolicitud.fecha_solicitud,
      aprobado_por: prestacionSolicitud.aprobado_por,
      estatus: prestacionSolicitud.estatus,
    });
  }

  public async getAll({
    page,
    perPage,
    order,
    orderBy,
  }: IQuery<PrestacionSolicitudPrimitive>): Promise<PrestacionSolicitudPrimitive[]> {
    const allPrestacionSolicitud = await db
      .select()
      .from(solicitud_prestacion)
      .orderBy(
        order === 'asc' ? asc(solicitud_prestacion[orderBy]) : desc(solicitud_prestacion[orderBy]),
      )
      .limit(perPage)
      .offset(page * perPage);
    return allPrestacionSolicitud;
  }

  public async getById(id: number): Promise<PrestacionSolicitudPrimitive> {
    const prestacionSolicitud = await db
      .select()
      .from(solicitud_prestacion)
      .where(eq(solicitud_prestacion.id, id))
      .limit(1);

    if (!prestacionSolicitud[0]) {
      throw new Error(`Solicitud de prestación con id ${id} no encontrada`);
    }

    return prestacionSolicitud[0];
  }

  public async update(prestacionSolicitud: PrestacionSolicitudPrimitive): Promise<void> {
    await db.update(solicitud_prestacion)
      .set({
        empleado_id: prestacionSolicitud.empleado_id,
        prestacion_id: prestacionSolicitud.prestacion_id,
        fecha_solicitud: prestacionSolicitud.fecha_solicitud,
        aprobado_por: prestacionSolicitud.aprobado_por,
        estatus: prestacionSolicitud.estatus,
      })
      .where(eq(solicitud_prestacion.id, prestacionSolicitud.id));
  }

}
