import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class EmpleadoNumero {
  public value: number;

  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }

  private ensureIsValid(value: number): void {
    if (!value)
      throw new InvalidDataException({
        message: 'El numero de empleado es necesario',
        campo: 'NumeroEmpleado',
      });

    if (!isNaN(value)) {
      throw new InvalidDataException({
        message: 'El numero de empleado tiene que ser un numero',
        campo: 'NumeroEmpleado',
        data: value,
      });
    }
  }
}
