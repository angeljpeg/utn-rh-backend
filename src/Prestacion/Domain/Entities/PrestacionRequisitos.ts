import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class PrestacionRequisitos {
  public value: string;
  public constructor(value: string) {
    this.value = value;
  }
  public ensureIsValid(): void {
    if (!this.value)
      throw new InvalidDataException({
        message: 'El requisito de la prestacion es nesecario',
        campo: 'PrestacionRequisitos',
        data: this.value,
      });

    if (this.value.length < 3)
      throw new InvalidDataException({
        message: 'El requisito debe ser al menos 3 caracteres',
        campo: 'PrestacionRequisitos',
        data: this.value,
      });

    if (this.value.length > 500)
      throw new InvalidDataException({
        message: 'El requisito debe ser al menos 500 caracteres',
        campo: 'PrestacionRequisitos',
        data: this.value,
      });
  }
}
