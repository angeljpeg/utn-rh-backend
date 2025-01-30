import { Empleado } from "./Empleado";

export interface EmpleadoRepository{
    create(Empleado:Empleado): Promise<void>
}