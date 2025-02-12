import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { EmpleadoSchema as empleados } from '@/src/Database/Infrastructure/Drizzle/schemas/EmpleadoSchema';
import { EmpleadoRepository } from '../Domain/Entities/EmpleadoRepository';
import { EmpleadoPrimitive } from '../Domain/Interfaces/EmpleadoPrimitive';
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { asc, desc,eq} from 'drizzle-orm';

export class EmpleadoMySQLRepository implements EmpleadoRepository {
  public async create(empleado: Omit<EmpleadoPrimitive, 'id'>): Promise<void> {
    try {
      await db.insert(empleados).values({
        nombre: empleado.nombre,
        genero: empleado.genero,
        fecha_ingreso: empleado.fecha_ingreso,
        antiguedad: empleado.antiguedad,
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
  }: IQuery<EmpleadoPrimitive>): Promise<EmpleadoPrimitive[]> {
      const empleadoall = await db
        .select()
        .from(empleados)
        .orderBy(order === 'asc' ? asc(empleados[orderBy]) : desc(empleados[orderBy]))
        .limit(perPage)
        .offset(page * perPage);
      return empleadoall;
  }
  public async getById(id: number): Promise<EmpleadoPrimitive | null> {
  
      const empleado = await db
        .select()
        .from(empleados)
        .where(eq(empleados.id, id));
      return empleado[0] ?? null;
   
  }

  public async update(id:number , empleado:EmpleadoPrimitive): Promise<void>{
    try {
      await db.update(empleados).set({
        nombre: empleado.nombre,
        genero: empleado.genero,
        fecha_ingreso: empleado.fecha_ingreso,
        antiguedad: empleado.antiguedad,
      }).where(eq(empleados.id, id));
    } catch (error) {
      console.error(error);
    }
  }
  public async delete(id:number): Promise<void>{
    try {
      await db.delete(empleados).where(eq(empleados.id, id));
    } catch (error) {
      console.error(error);
    }
  }
}
