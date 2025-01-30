import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class NoEmpleado {
  public value: number;
  public constructor(value: number) {
    this.validarNoEmpleado(value);
    this.value = value;
  }

  private validarNoEmpleado(value: number): void {
    if (!value) {
      throw new InvalidDataException({
        message: 'Numero de Emplado es necesario',
        campo: 'NoEmpleado',
      });
    }
    if (isNaN(value)) {
      throw new InvalidDataException({
        message: 'El numero de Empleado tiene que ser un numero',
        campo: 'NoEmplaedo',
        data: value,
      });
    }
  }
}
