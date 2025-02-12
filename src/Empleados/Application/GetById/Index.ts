
import { EmpleadoNumero } from "../../Domain/Entities/EmpleadoNumero";
import { EmpleadoRepository } from "../../Domain/Entities/EmpleadoRepository";
import { EmpleadoPrimitive } from "../../Domain/Interfaces/EmpleadoPrimitive";

export class GetEmpleadoById {
    public constructor(private readonly empleadoRepo: EmpleadoRepository) {}
    
    public async run(id: number): Promise<EmpleadoPrimitive | null> {
        const empleadoId = new EmpleadoNumero(id);
        const empleado = await this.empleadoRepo.getById(empleadoId.value);
        return empleado;  
    }
}