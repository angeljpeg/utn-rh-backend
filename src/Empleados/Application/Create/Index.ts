import { Empleado } from '../../Domain/Entities/Empleado';
import { EmpleadoAntiguedad } from '../../Domain/Entities/EmpleadoAntiguedad';
import { EmpleadoFechaIngreso } from '../../Domain/Entities/EmpleadoFechaIngreso';
import { EmpleadoGenero } from '../../Domain/Entities/EmpleadoGenero';
import { EmpleadoNombre } from '../../Domain/Entities/EmpleadoNombre';
import { EmpleadoNumero } from '../../Domain/Entities/EmpleadoNumero';
import { EmpleadoRepository } from '../../Domain/Entities/EmpleadoRepository';
import { EmpleadoCreateDto } from '../../Domain/Interfaces/EmpleadoCreateDto';

export class CreateEmpleado {
  public constructor(private readonly empleadoRepo: EmpleadoRepository) {}

  public async run({ id, nombre, genero, fecha_ingreso }: EmpleadoCreateDto): Promise<void> {
    const fechaIngreso = new Date(fecha_ingreso);
    const fechaActual = new Date();

    // Cálculo de la antigüedad en meses
    const antiguedad =
      (fechaActual.getFullYear() - fechaIngreso.getFullYear()) * 12 +
      fechaActual.getMonth() -
      fechaIngreso.getMonth();

    const nuevoEmpleado = new Empleado(
      id ? new EmpleadoNumero(id) : EmpleadoNumero.random(),
      new EmpleadoNombre(nombre),
      new EmpleadoGenero(genero as 'M' | 'F'),
      new EmpleadoFechaIngreso(fecha_ingreso),
      new EmpleadoAntiguedad(antiguedad),
    );
    await this.empleadoRepo.create(nuevoEmpleado.toEmpleadoPrimitive());
  }
}
