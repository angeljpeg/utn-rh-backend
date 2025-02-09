import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class DescasnoDescripcion {
  public value: string;
  public constructor(value: string) {
    this.value = value;
  }
  public ensureIsValid(): void {
    if (!this.value)
      throw new InvalidDataException({
        message: 'La escripcion de la prestacion es nesecario',
        campo: 'DescansoDescripcion',
        data: this.value,
      });

    if (this.value.length < 3)
      throw new InvalidDataException({
        message: 'La descripcion  debe ser al menos 3 caracteres',
        campo: 'DescansoDescripcion',
        data: this.value,
      });

    if (this.value.length > 500)
      throw new InvalidDataException({
        message: 'La descripcion debe ser al menos 500 caracteres',
        campo: 'DescansoDescripcion',
        data: this.value,
      });
  }
}
