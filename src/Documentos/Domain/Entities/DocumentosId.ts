import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class DocumentoId{
  public value:number
  public constructor(value:number){
    this.ensureIsValid(value)
    this.value = value
  }
  private ensureIsValid(value: number): void {
      if (!value)
        throw new InvalidDataException({
          message: 'El Id del documento es necesario',
          campo: 'DocumentoId',
        });
  
      if (!isNaN(value)) {
        throw new InvalidDataException({
          message: 'El Id del documento tiene que ser un numero',
          campo: 'DocumentoId',
          data: value,
        });
      }
    }
}