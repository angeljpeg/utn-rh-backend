import { PrestacionSolicitudRepository } from '../Domain/Entities/PrestacionSolicitudRepository';
import { PrestacionSolicitudPrimitive } from '../Domain/Interfaces/PrestacionSolicitudPrimitive';

import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { SolicitudPrestacionSchema as solicitudPrestacion } from '@/src/Database/Infrastructure/Drizzle/schemas/SolicitudPrestacionSchema';
import { EstatusType } from '@/src/Shared/Domain/Interfaces/Estatus';
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { asc, desc, eq } from 'drizzle-orm';

export class DrizzleMySQLPrestacionSolicitudRepository implements PrestacionSolicitudRepository {
  public async create(prestacionSolicitud: PrestacionSolicitudPrimitive): Promise<void> {
    await db.insert(solicitudPrestacion).values({
      empleado_id: prestacionSolicitud.empleado_id,
      prestacion_id: prestacionSolicitud.prestacion_id,
      fecha_solicitud: prestacionSolicitud.fecha_solicitud,
      aprobado_por: prestacionSolicitud.aprobado_por,
    });
  }

  public async findById(id: number): Promise<PrestacionSolicitudPrimitive | null> {
    const prestacionSolicitud = await db
      .select()
      .from(solicitudPrestacion)
      .where(eq(solicitudPrestacion.id, id));
    return prestacionSolicitud[0] ?? null;
  }

  public async update(prestacionSolicitud: PrestacionSolicitudPrimitive): Promise<void> {
    await db
      .update(solicitudPrestacion)
      .set({
        empleado_id: prestacionSolicitud.empleado_id,
        prestacion_id: prestacionSolicitud.prestacion_id,
        fecha_solicitud: prestacionSolicitud.fecha_solicitud,
        aprobado_por: prestacionSolicitud.aprobado_por,
        estatus: prestacionSolicitud.estatus as EstatusType,
      })
      .where(eq(solicitudPrestacion.id, prestacionSolicitud.id));
  }

  public async delete(id: number): Promise<void> {
    await db.delete(solicitudPrestacion).where(eq(solicitudPrestacion.id, id));
  }

  public async findAll(
    query: IQuery<PrestacionSolicitudPrimitive>,
  ): Promise<PrestacionSolicitudPrimitive[]> {
    const { order, orderBy, page, perPage } = query;
    const prestacionSolicitudes = await db
      .select()
      .from(solicitudPrestacion)
      .orderBy(
        order === 'asc' ? asc(solicitudPrestacion[orderBy]) : desc(solicitudPrestacion[orderBy]),
      )
      .limit(perPage)
      .offset(page * perPage);
    return prestacionSolicitudes;
  }
}
