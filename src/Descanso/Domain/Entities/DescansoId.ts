import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class DescansoId {
  public value: number;
  private campo = 'id';
  public constructor(value: number) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: number): void {
    if (!value)
      throw new BadRequest({
        message: 'El ID es necesario',
        campo: this.campo,
      });

    if (isNaN(value)) {
      throw new BadRequest({
        message: 'El ID tiene que ser un numero',
        campo: this.campo,
        data: value,
      });
    }
  }

  public static autoGenerate(): DescansoId {
    return new DescansoId(Math.floor(Math.random() * 1000));
  }
}
