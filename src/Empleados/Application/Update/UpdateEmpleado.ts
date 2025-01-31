import { Empleado } from '../../Domain/Empleado';
import { EmpleadoID } from '../../Domain/EmpleadoId';
import { EmpleadoRepository } from '../../Domain/EmpleadoRepository';

export class UpdateEmpleado {
  public constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  public async run(id: EmpleadoID, empleado: Empleado): Promise<void> {
    await this.empleadoRepository.getById(id);
    await this.empleadoRepository.update(empleado);
  }
}
