import { InvalidDataException } from "@/src/Shared/Domain/Exceptions/InvalidDataException";

export class NombreEmplado{
    public value: string;
    public constructor(value:string){
      this.validarNombre(value);
      this.value= value
    }

    private  validarNombre(value:string):void {
          if (!value)
              throw new InvalidDataException({
                message: 'El Nombre es necesario',
                campo: 'nombre',
                data: this.value,
              });
        
            if (value.length < 3)
              throw new InvalidDataException({
                message: 'El Nombre debe ser al menos 3 caracteres',
                campo: 'nombre',
                data: this.value,
              });
        
            if (value.length > 50)
              throw new InvalidDataException({
                message: 'El Nombre debe ser al menos 50 caracteres',
                campo: 'nombre',
                data: this.value,
              });
    }
}