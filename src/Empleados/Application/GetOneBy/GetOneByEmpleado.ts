import { EmpleadoRepository } from '../../Domain/EmpleadoRepository';
import { Empleado } from '../../Domain/Empleado';
import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class GetOneByEmpleados {
  public constructor(private readonly empleadoRepository: EmpleadoRepository) {}

  public async run(campo: string, value: string): Promise<Empleado | null> {
    if (campo !== 'noEmpleado') {
      throw new InvalidDataException({
        message: 'Campo Invalido',
        campo: campo,
        data: value,
      });
    }

    return this.empleadoRepository.getOneBy(campo, value);
  }
}
