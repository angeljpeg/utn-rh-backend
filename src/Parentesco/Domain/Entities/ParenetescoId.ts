import { BadRequest } from "@/src/Shared/Domain/Exceptions/BadRequest";


export class ParentescoId {
    public  value: number;

    public constructor(value: number) {
        this.value = value
        this.ensureIsValid(value);
    }
    private ensureIsValid(value: number): void {
        if (!value)
          throw new BadRequest({
            message: 'El ID es necesario',
            campo: 'ParentescoId',
          });
        if (isNaN(value)) {
          throw new BadRequest({
            message: 'El ID tiene que ser un numero',
            campo: 'ParentescoId',
            data: value,
          });
        }
      }
      public static random(): ParentescoId {
        return new ParentescoId(1);
      }
}