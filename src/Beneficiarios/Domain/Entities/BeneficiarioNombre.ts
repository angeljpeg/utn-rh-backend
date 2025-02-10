import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class BeneficiarioNombre {
  public value: string;
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }
  public ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'El Nombre es necesario',
        campo: 'BeneficiarioNombre',
        data: value,
      });

    if (value.length < 3)
      throw new BadRequest({
        message: 'El Nombre debe ser al menos 3 caracteres',
        campo: 'BeneficiarioNombre',
        data: value,
      });

    if (value.length > 50)
      throw new BadRequest({
        message: 'El Nombre debe ser al menos 50 caracteres',
        campo: 'BeneficiarioNombre',
        data: value,
      });
  }
}
