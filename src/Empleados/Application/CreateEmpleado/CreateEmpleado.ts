import { Empleado } from "../../Domain/Empleado";
import { EmpleadoID } from "../../Domain/EmpleadoId";
import { EmpleadoRepository } from "../../Domain/EmpleadoRepository";
import { FechaIngreso } from "../../Domain/FechaDeIngreso";
import { NoEmpleado } from "../../Domain/NoEmpleado";
import { NombreEmplado } from "../../Domain/NombreEmpleado";
import { CreateEmpleadoDto } from "./CreateEmplaeadoDto";

export class CreateEmpleado{
    public constructor(private readonly empleadoRepository:EmpleadoRepository){
        
    }
    public async run(empleado:CreateEmpleadoDto): Promise<void>{
        const nuevoEmpleado = new Empleado(new EmpleadoID(empleado.EmpleadoID),new NombreEmplado(empleado.NombreEmpleado),new NoEmpleado(Number(empleado.NoEmpleado)),new FechaIngreso(empleado.FechaIngreso))
        this.empleadoRepository.create(nuevoEmpleado)
    }
    
}