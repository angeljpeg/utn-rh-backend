import { IQuery } from "@/src/Shared/Domain/Interfaces/Query";
import { DiasDescansoRepository } from "../Domain/Entities/DiasDescansoRepository";
import { DiasDescansoPrimitive } from "../Domain/Interface/DiasDescansoPrimitive";
import { db } from "@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService";
import { DiasDescansoSchema as DiasDescansos } from "@/src/Database/Infrastructure/Drizzle/schemas/DiasDescansoSchema";
import { asc, desc, eq } from "drizzle-orm";

export class DrizzleMySQLRepository implements DiasDescansoRepository {
      public async create(descanso: Omit<DiasDescansoPrimitive, 'id'>): Promise<void> {
          await db.insert(DiasDescansos).values({
            descanso_id: descanso.descanso_id,
            fecha: descanso.fecha,
          });
      }

      public async getAll({
        order,
        orderBy,
        page,
        perPage,
      }: IQuery<DiasDescansoPrimitive>): Promise<DiasDescansoPrimitive[]> {
        const allDiasDescansos = await db
          .select()
          .from(DiasDescansos)
          .orderBy(order === 'asc' ? asc(DiasDescansos[orderBy]) : desc(DiasDescansos[orderBy]))
          .limit(perPage)
          .offset(page * perPage);
        return allDiasDescansos;
      }

      public async getById(id: number): Promise<DiasDescansoPrimitive | null> {
        const descanso = await db
          .select()
          .from(DiasDescansos)
          .where(eq(DiasDescansos.id, id));
        return descanso[0] ?? null;
      }

      public async update(id: number, descanso: DiasDescansoPrimitive): Promise<void> {
        await db
          .update(DiasDescansos)
          .set({
            descanso_id: descanso.descanso_id,
            fecha: descanso.fecha,
          })
          .where(eq(DiasDescansos.id, id));
      }

      public async delete(id: number): Promise<void> {
        await db.delete(DiasDescansos).where(eq(DiasDescansos.id, id));
      }
}
