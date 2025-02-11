/* PRESTACIONES */
import { PrestacionRepository } from '../Domain/Entities/PrestacionRepository';
/* DRIZZLE */
import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { PrestacionSchema as prestaciones } from '@/src/Database/Infrastructure/Drizzle/schemas/PrestacionSchema';
import { PrestacionPrimitive } from '../Domain/Interfaces/PrestacionPrimitive';
export class PrestacionMySQLRepository implements PrestacionRepository {
  public async create(prestacion: PrestacionPrimitive): Promise<void> {
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
}
