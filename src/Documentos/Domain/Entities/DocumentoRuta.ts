import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';

export class DocumentoRuta {
  public value: string;
  public constructor(value: string) {
    this.value = value;
  }
  public ensureIsValid(): void {
    if (!this.value)
      throw new InvalidDataException({
        message: 'La ruta  del Documento es necesario',
        campo: 'DocumentoRuta',
        data: this.value,
      });

    if (this.value.length < 3)
      throw new InvalidDataException({
        message: 'La ruta  del Documento debe ser al menos 3 caracteres',
        campo: 'DocumentoNombre',
        data: this.value,
      });

    if (this.value.length > 50)
      throw new InvalidDataException({
        message: 'La ruta  del Documento debe ser al menos 50 caracteres',
        campo: 'DocumentoNombre',
        data: this.value,
      });
  }
}
