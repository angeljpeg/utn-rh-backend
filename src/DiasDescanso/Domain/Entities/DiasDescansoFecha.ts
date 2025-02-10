import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class DiasDescansoFecha {
    public value:Date
    public constructor(value:Date){

        this.value = value
    }
    private ensureIsValid(value: Date): void {
          const regex = /^\d{4}-\d{2}-\d{2}$/;
          const dateString = value.toISOString().split('T')[0];
          if (!value) {
            throw new InvalidDataException({
              message: 'Favor de Ingresar Una Fecha',
              campo: 'DiasDescansoFecha',
            });
          }
      
          if (!regex.test(dateString)) {
            throw new InvalidDataException({
              message: 'favor la fecha en el formato correcto YYYY/MM/DD',
              campo: 'DiasDescansoFecha',
              data: dateString,
            });
          }
        }
}