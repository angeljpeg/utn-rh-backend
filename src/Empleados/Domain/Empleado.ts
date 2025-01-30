import { DiasdeVacaciones } from "./DiasdeVacaciones";
import { EmpleadoID } from "./EmpleadoId";
import { FechaIngreso } from "./FechaDeIngreso";
import { NoEmpleado } from "./NoEmpleado";
import { NombreEmplado } from "./NombreEmpleado";

export class Empleado {
  public EmpleadoId: EmpleadoID;
  public NombreEmplado: NombreEmplado;
  public NoEmpleado: NoEmpleado;
  public FechaIngreso: FechaIngreso;
  public DiasdeVacaciones: DiasdeVacaciones;

  public constructor(
    EmpleadoID: EmpleadoID,
    NombreEmplado: NombreEmplado,
    NoEmpleado: NoEmpleado,
    FechaIngreso: FechaIngreso,
  ) {
    this.EmpleadoId = EmpleadoID;
    this.NombreEmplado = NombreEmplado;
    this.NoEmpleado = NoEmpleado;
    this.FechaIngreso = FechaIngreso;
    this.DiasdeVacaciones = new DiasdeVacaciones(2);
  }
}
