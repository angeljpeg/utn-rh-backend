import { Empleado } from '../../Domain/Empleado';
import { EmpleadoID } from '../../Domain/EmpleadoId';
import { EmpleadoRepository } from '../../Domain/EmpleadoRepository';

export class GetOneByIdEmpleado {
  public constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  public async run(id: EmpleadoID): Promise<Empleado | null> {
    const empleado = await this.empleadoRepository.getById(id);
    return empleado;
  }
}
