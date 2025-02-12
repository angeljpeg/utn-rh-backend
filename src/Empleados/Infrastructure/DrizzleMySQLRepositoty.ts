import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { EmpleadoSchema as empleados } from '@/src/Database/Infrastructure/Drizzle/schemas/EmpleadoSchema';
import { EmpleadoRepository } from '../Domain/Entities/EmpleadoRepository';
import { EmpleadoPrimitive } from '../Domain/Interfaces/EmpleadoPrimitive';

export class EmpleadoMySQLRepository implements EmpleadoRepository {
  public async create(empleado: Omit<EmpleadoPrimitive, 'id'>): Promise<void> {
    try {
        await db
        .insert(empleados)
        .values({
          nombre: empleado.nombre,
          genero: empleado.genero,
          fecha_ingreso: empleado.fecha_ingreso,
          antiguedad: empleado.antiguedad,
        });
    }catch (error) {
      console.error(error);  
    }
  }
}
