import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class PrestacionAntiguedadMinima{
    public value:number
    public constructor(value:number){
    this.ensureIsValid(value)
    this.value = value
    }
      private ensureIsValid(value: number): void {
        if (!value)
          throw new InvalidDataException({
            message: 'La Antiguedad  es necesaria',
            campo: 'PrestacionAntiguedadMinima',
          });
    
        if (!isNaN(value)) {
          throw new InvalidDataException({
            message: 'La antiguedad minoma  tiene que ser un numero',
            campo: 'PrestacionAntiguedadMinima',
            data: value,
          });
        }
      }

}