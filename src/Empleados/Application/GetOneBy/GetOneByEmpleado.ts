import { EmpleadoRepository } from '../../Domain/EmpleadoRepository';
import { Empleado } from '../../Domain/Empleado';
import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFoundException';

export class GetOneByEmpleados {
  public constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  public async run(campo: string, value: string): Promise<Empleado | null> {
    const empleado = await this.empleadoRepository.getOneBy(campo, value);

    if (!empleado)
      throw new NotFoundException({ message: 'Empleado no encontrado', campo, data: value });

    return empleado;
  }
}
