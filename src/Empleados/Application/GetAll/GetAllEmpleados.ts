import { EmpleadoPrimitive } from '../../Domain/Empleado';
import { EmpleadoRepository } from '../../Domain/EmpleadoRepository';

export class GetAllEmpleados {
  public constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  public async run(): Promise<EmpleadoPrimitive[]> {
    const empleados = await this.empleadoRepository.getAll();
    return empleados.map(e => e.toPrimitives());
  }
}
