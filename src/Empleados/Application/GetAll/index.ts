import { EmpleadoRepository } from "../../Domain/Entities/EmpleadoRepository";
import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { EmpleadoPrimitive } from '../../Domain/Interfaces/EmpleadoPrimitive';

export class GetAllEmpleados {
     public constructor(private readonly empleadoRepo: EmpleadoRepository) {}
    public async run(query: IQuery<EmpleadoPrimitive>): Promise<EmpleadoPrimitive[]> {
      const empleados = await this.empleadoRepo.getAll(query);
      return empleados;
    }
}