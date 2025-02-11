/* PRESTACIONES */
import { PrestacionRepository } from '../Domain/Entities/PrestacionRepository';
/* DRIZZLE */
import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { PrestacionSchema as prestaciones } from '@/src/Database/Infrastructure/Drizzle/schemas/PrestacionSchema';
import { PrestacionPrimitive } from '../Domain/Interfaces/PrestacionPrimitive';
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { asc, desc, eq } from 'drizzle-orm';
export class PrestacionMySQLRepository implements PrestacionRepository {
  public async create(prestacion: Omit<PrestacionPrimitive, 'id'>): Promise<void> {
    try {
      await db.insert(prestaciones).values({
        nombre: prestacion.nombre,
        descripcion: prestacion.descripcion,
        monto_maximo: prestacion.monto_maximo.toString(),
        frecuencia: prestacion.frecuencia,
        requisitos: prestacion.requisitos,
        antiguedad_minima: prestacion.antiguedad_minima.toString(),
      });
    } catch (error) {
      console.error(error);
    }
  }

  public async getAll({
    page,
    perPage,
    order,
    orderBy,
  }: IQuery<PrestacionPrimitive>): Promise<PrestacionPrimitive[]> {
    const AllPrestaciones = db
      .select()
      .from(prestaciones)
      .orderBy(order === 'asc' ? asc(prestaciones[orderBy]) : desc(prestaciones[orderBy]))
      .limit(perPage)
      .offset(page * perPage);
    return AllPrestaciones;
  }

  public async getById(id: number): Promise<PrestacionPrimitive | null> {
    try {
      const prestacion = await db.select().from(prestaciones).where(eq(prestaciones.id, id));
      return prestacion[0] ?? null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async update(id: number, prestacion: PrestacionPrimitive): Promise<void> {
    try {
      await db
        .update(prestaciones)
        .set({
          nombre: prestacion.nombre,
          descripcion: prestacion.descripcion,
          monto_maximo: prestacion.monto_maximo.toString(),
          frecuencia: prestacion.frecuencia,
          requisitos: prestacion.requisitos,
          antiguedad_minima: prestacion.antiguedad_minima.toString(),
        })
        .where(eq(prestaciones.id, id));
    } catch (error) {
      console.error(error);
    }
  }
}
