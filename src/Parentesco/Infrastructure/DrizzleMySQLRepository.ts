import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { ParentescoRepository } from '../Domain/Entities/ParentescoRepository';
import { ParentescoPrimitive } from '../Domain/Interfaces/ParentescoPrimitive';
import { ParentescoSchema as parentescos } from '@/src/Database/Infrastructure/Drizzle/schemas/ParentescoSchema';

export class DrizzleParentescoRepository implements ParentescoRepository {
  public async create(parentesco: Omit<ParentescoPrimitive, 'id'>): Promise<void> {
    await db.insert(parentescos).values({
      nombre: parentesco.nombre,
      grado: parentesco.grado,
    });
  }
}
