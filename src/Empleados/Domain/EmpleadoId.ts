import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class EmpleadoID {
  public value: string;
  public constructor(value: string) {
    this.validarID(value);
    this.value = value;
  }

  private validarID(value: string): void {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!value)
      throw new InvalidDataException({
        message: 'El ID es necesario',
        campo: 'EmpleadoID',
      });
    if (!uuidRegex.test(value))
      throw new InvalidDataException({
        message: 'El ID debe ser un UUID',
        campo: 'EmpleadoID',
        data: value,
      });
  }
}
