import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class ParentescoGrado {
  public value: number;
  private campo = 'grado';
  public constructor(value: number) {
    this.value = value;
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El Grado es necesario',
        campo: this.campo,
      });
    if (isNaN(value)) {
      throw new BadRequest({
        message: 'El Grado tiene que ser un numero',
        campo: this.campo,
        data: value,
      });
    }

    if (value < 1)
      throw new BadRequest({
        message: 'El Grado tiene que ser mayor que 1',
        campo: this.campo,
        data: value,
      });

    if (value > 4)
      throw new BadRequest({
        message: 'El Grado tiene que ser menor o igual que 4',
        campo: this.campo,
        data: value,
      });
  }
}
