/* Descanso Entities */
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { DescansoRepository } from '../Domain/Entities/DescansoRepository';
import { DescansoPrimitive } from '../Domain/Interface/DescansoPrimitive';
/* Drizzle */
import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { DescansoSchema as descansos } from '@/src/Database/Infrastructure/Drizzle/schemas/DescansoSchema';
import { asc, desc, eq } from 'drizzle-orm';

export class DrizzleMySQlDescansoRepository implements DescansoRepository {
  public async create(descanso: Omit<DescansoPrimitive, 'id'>): Promise<void> {
    await db.insert(descansos).values({
      nombre: descanso.nombre,
      descripcion: descanso.descripcion,
    });
  }

  public async getAll({
    order,
    orderBy,
    page,
    perPage,
  }: IQuery<DescansoPrimitive>): Promise<DescansoPrimitive[]> {
    const allDescansos = db
      .select()
      .from(descansos)
      .orderBy(order === 'asc' ? asc(descansos[orderBy]) : desc(descansos[orderBy]))
      .limit(perPage)
      .offset(page * perPage);

    return allDescansos;
  }

  public async getById(id: number): Promise<DescansoPrimitive | null> {
    const descanso = await db.select().from(descansos).where(eq(descansos.id, id)).limit(1);

    return descanso[0] ?? null;
  }

  public async update(id: number, descanso: DescansoPrimitive): Promise<void> {
    await db
      .update(descansos)
      .set({
        nombre: descanso.nombre,
        descripcion: descanso.descripcion,
      })
      .where(eq(descansos.id, id));
  }

  public async delete(id: number): Promise<void> {
    await db.delete(descansos).where(eq(descansos.id, id));
  }
}
