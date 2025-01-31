import { Empleado } from '../Domain/Empleado';
import { EmpleadoID } from '../Domain/EmpleadoId';
import { EmpleadoRepository } from '../Domain/EmpleadoRepository';

import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { EmpleadoSchema as empleados } from '@/src/Database/Infrastructure/Drizzle/schemas/EmpleadoSchema';
import { NombreEmplado } from '../Domain/NombreEmpleado';
import { NoEmpleado } from '../Domain/NoEmpleado';
import { FechaIngreso } from '../Domain/FechaDeIngreso';
import { DiasdeVacaciones } from '../Domain/DiasdeVacaciones';

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

  public async getAll(): Promise<Empleado[]> {
    const allEmpleados = await db.select().from(empleados);
    return allEmpleados.map(
      empleado =>
        new Empleado(
          new EmpleadoID(empleado.EmpleadoId),
          new NombreEmplado(empleado.nombreEmplado),
          new NoEmpleado(empleado.NoEmpleado),
          new FechaIngreso(empleado.FechadeIngreso),
          new DiasdeVacaciones(empleado.DiasVacaciones),
        ),
    );
  }
}
