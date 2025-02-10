import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class DescansoSolicitudId{
 public value:  number
 public constructor(value:number){
    this.ensureIsValid(value)
    this.value = value
 }
   private ensureIsValid(value: number): void {
      if (!value)
        throw new InvalidDataException({
          message: 'El numero de empleado es necesario',
          campo: 'DescansoSolicitudId',
        });
  
      if (!isNaN(value)) {
        throw new InvalidDataException({
          message: 'El numero de empleado tiene que ser un numero',
          campo: 'DescansoSolicitudId',
          data: value,
        });
      }
    }
}
