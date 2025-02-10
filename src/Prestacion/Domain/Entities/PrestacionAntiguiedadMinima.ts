import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class PrestacionAntiguedadMinima {
  public value: number;
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'La Antiguedad  es necesaria',
        campo: 'PrestacionAntiguedadMinima',
      });

    if (!isNaN(value)) {
      throw new BadRequest({
        message: 'La antiguedad minoma  tiene que ser un numero',
        campo: 'PrestacionAntiguedadMinima',
        data: value,
      });
    }
  }
}
