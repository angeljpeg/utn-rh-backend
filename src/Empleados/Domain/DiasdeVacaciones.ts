import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class DiasdeVacaciones {
  public value: number;
  public constructor(value: number) {
    this.validarVacaciones(value);
    this.value = value;
  }
  private validarVacaciones(value: number): void {
    if (!value)
      throw new InvalidDataException({
        message: 'El Numero de dias de vacaciones es necesario',
        campo: 'DiasdeVacaciones',
      });
    if (isNaN(value)) {
      throw new InvalidDataException({
        message: 'Los dias de vacaciones tiene que ser un numero',
        campo: 'DiasdeVacaciones',
        data: value,
      });
    }
  }
}
