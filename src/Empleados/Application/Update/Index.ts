import { EmpleadoRepository } from "../../Domain/Entities/EmpleadoRepository";
import { EmpleadoPrimitive } from "../../Domain/Interfaces/EmpleadoPrimitive";

export class UpdateEmpleado{
    public constructor(private readonly empleadoRepo: EmpleadoRepository) {}
    public async run(id : number , empleado: EmpleadoPrimitive): Promise<void> {
        await this.empleadoRepo.getById(id);
        await this.empleadoRepo.update(id, empleado);
    }
}