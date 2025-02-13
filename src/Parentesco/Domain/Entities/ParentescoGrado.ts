import { BadRequest } from "@/src/Shared/Domain/Exceptions/BadRequest";

export class ParentescoGrado{
    public value: number
    public constructor(value: number) {
        this.value = value
        this.ensureIsValid(value);
    }

    private ensureIsValid(value: number): void {
        if (!value)
          throw new BadRequest({
            message: 'El Grado es necesario',
            campo: 'ParentescoGrado',
          });
        if (isNaN(value)) {
          throw new BadRequest({
            message: 'El Grado tiene que ser un numero',
            campo: 'ParentescoGrado',
            data: value,
          });
        }
      }
}