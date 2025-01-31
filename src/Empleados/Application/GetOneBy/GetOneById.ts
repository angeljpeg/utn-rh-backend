import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFoundException';
import { EmpleadoRepository } from '../../Domain/EmpleadoRepository';
import { Empleado } from '../../Domain/Empleado';
import { EmpleadoID } from '../../Domain/EmpleadoId';

export class GetOneByIdEmpleados {
  public constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  public async run(id: EmpleadoID): Promise<Empleado | null> {
    const empleado = await this.empleadoRepository.getById(id);

    if (!empleado)
      throw new NotFoundException({ message: 'Empleado no encontrado', campo: 'id', data: id });

    return empleado;
  }
}
