import { BadRequest } from '@/src/Shared/Domain/Exceptions/BadRequest';

export class DocumentoRuta {
  public value: string;
  public constructor(value: string) {
    this.ensureIsValid(value);
    this.value = value;
  }
  public ensureIsValid(value: string): void {
    if (!value)
      throw new BadRequest({
        message: 'La ruta  del Documento es necesario',
        campo: 'DocumentoRuta',
        data: value,
      });

    if (value.length < 3)
      throw new BadRequest({
        message: 'La ruta  del Documento debe ser al menos 3 caracteres',
        campo: 'DocumentoRuta',
        data: value,
      });

    if (value.length > 255)
      throw new BadRequest({
        message: 'La ruta  del Documento debe ser al menos 50 caracteres',
        campo: 'DocumentoRuta',
        data: value,
      });
  }
}
