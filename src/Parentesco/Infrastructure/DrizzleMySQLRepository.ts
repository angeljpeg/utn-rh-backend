import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { ParentescoRepository } from '../Domain/Entities/ParentescoRepository';
import { ParentescoPrimitive } from '../Domain/Interfaces/ParentescoPrimitive';
import { ParentescoSchema as parentescos } from '@/src/Database/Infrastructure/Drizzle/schemas/ParentescoSchema';
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { asc, desc, eq } from 'drizzle-orm';

export class DrizzleParentescoRepository implements ParentescoRepository {
  public async create(parentesco: Omit<ParentescoPrimitive, 'id'>): Promise<void> {
    await db.insert(parentescos).values({
      nombre: parentesco.nombre,
      grado: parentesco.grado,
    });
  }
   public async getAll({
   page,
   perPage,
   order,
   orderBy,
   }: IQuery<ParentescoPrimitive>): Promise<ParentescoPrimitive[]> {
    const allParentescos = await db
      .select()
      .from(parentescos)
      .orderBy(order === 'asc' ? asc(parentescos[orderBy]) : desc(parentescos[orderBy]))
      .limit(perPage)
      .offset(page * perPage);
    return allParentescos;
  }
  public async getById(id: number): Promise<ParentescoPrimitive | null> {
    const parentesco = await db
      .select()
      .from(parentescos)
      .where(eq(parentescos.id, id))
      .limit(1);
    return parentesco[0];
  }
  public async update(id: number, parentesco: ParentescoPrimitive): Promise<void> {
    await db
      .update(parentescos)
      .set({
        nombre: parentesco.nombre,
        grado: parentesco.grado,
      })
      .where(eq(parentescos.id, id));
  }
  public async delete(id: number): Promise<void> {
    await db.delete(parentescos).where(eq(parentescos.id, id));
  }
}
