import { Empleado } from '../Domain/Empleado';
import { EmpleadoRepository } from '../Domain/EmpleadoRepository';

import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { EmpleadoSchema as empleados } from '@/src/Database/Infrastructure/Drizzle/schemas/EmpleadoSchema';

export class DrizzleMySQLEmpleadoRepository implements EmpleadoRepository {
  public async create(empleado: Empleado): Promise<void> {
    await db.insert(empleados).values({
      EmpleadoId: empleado.EmpleadoId.value,
      nombreEmplado: empleado.NombreEmplado.value,
      NoEmpleado: empleado.NoEmpleado.value,
      FechadeIngreso: empleado.FechaIngreso.value,
      DiasVacaciones: empleado.DiasdeVacaciones.value,
    });
  }
}
