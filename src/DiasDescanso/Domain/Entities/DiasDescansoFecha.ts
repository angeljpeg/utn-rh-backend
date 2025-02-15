import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class DiasDescansoFecha {
  public value: Date;
  public constructor(value: Date) {
    this.ensureIsValid(value);
    this.value = value;
  }
  private ensureIsValid(value: Date): void {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    const dateString = value.toISOString().split('T')[0];
    if (!value) {
      throw new BadRequest({
        message: 'La fecha es requerida',
        campo: 'fecha',
      });
    }

    if (!regex.test(dateString)) {
      throw new BadRequest({
        message: 'favor la fecha en el formato correcto YYYY-MM-DD',
        campo: 'fecha',
        data: dateString,
      });
    }
  }
}
