import { Empleado } from '../../Domain/Empleado';
import { EmpleadoRepository } from '../../Domain/EmpleadoRepository';

export class GetByEmpleados {
  public constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  public async run(campo: string, value: string): Promise<Empleado[]> {
    return await this.empleadoRepository.getBy(campo, value);
  }
}
