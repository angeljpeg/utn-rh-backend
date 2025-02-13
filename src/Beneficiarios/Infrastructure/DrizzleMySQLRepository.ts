import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { BeneficiarioSchema as beneficiarios } from '@/src/Database/Infrastructure/Drizzle/schemas/BeneficiarioSchema';
import { BeneficiarioRepository } from '../Domain/Entities/BeneficiarioRepository';
import { BeneficiarioPrimitive } from '../Domain/Interface/BeneficiarioPrimitive';
import { eq, asc, desc } from 'drizzle-orm';
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';

export class BeneficiarioSQLRepository implements BeneficiarioRepository {
  public async create(beneficiario: Omit<BeneficiarioPrimitive, 'id'>): Promise<void> {

    await db.insert(beneficiarios).values({
      empleado_id: beneficiario.empleado_id,
      nombre: beneficiario.nombre,
      parentesco_id: beneficiario.parentesco_id,
      nivel_educativo: beneficiario.nivel_educativo,
    });
  }

  public async getAll({
    page,
    perPage,
    order,
    orderBy,
  }: IQuery<BeneficiarioPrimitive>): Promise<BeneficiarioPrimitive[]> {
    const allBeneficiarios = await db
      .select()
      .from(beneficiarios)
      .orderBy(order === 'asc' ? asc(beneficiarios[orderBy]) : desc(beneficiarios[orderBy]))
      .limit(perPage)
      .offset(page * perPage);
    return allBeneficiarios;
  }

  public async getById(id: number): Promise<BeneficiarioPrimitive | null> {
    const beneficiario = await db
      .select()
      .from(beneficiarios)
      .where(eq(beneficiarios.id, id));
    return beneficiario[0] ?? null;
  }

  public async update(id: number, beneficiario: Omit<BeneficiarioPrimitive, 'id'>): Promise<void> {
    await db.update(beneficiarios)
      .set({
        empleado_id: beneficiario.empleado_id,
        nombre: beneficiario.nombre,
        parentesco_id: beneficiario.parentesco_id,
        nivel_educativo: beneficiario.nivel_educativo,
      })
      .where(eq(beneficiarios.id, id));
  }

  public async delete(id: number): Promise<void> {
    await db.delete(beneficiarios).where(eq(beneficiarios.id, id));
  }
}
