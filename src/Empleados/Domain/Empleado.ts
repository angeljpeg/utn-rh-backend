import { DiasdeVacaciones } from './DiasdeVacaciones';
import { EmpleadoID } from './EmpleadoId';
import { FechaIngreso } from './FechaDeIngreso';
import { NoEmpleado } from './NoEmpleado';
import { NombreEmplado } from './NombreEmpleado';

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
    DiasdeVacaciones: DiasdeVacaciones,
  ) {
    this.EmpleadoId = EmpleadoID;
    this.NombreEmplado = NombreEmplado;
    this.NoEmpleado = NoEmpleado;
    this.FechaIngreso = FechaIngreso;
    this.DiasdeVacaciones = DiasdeVacaciones;
  }

  public toPrimitives(): EmpleadoPrimitive {
    return {
      empleadoId: this.EmpleadoId.value,
      nombreEmplado: this.NombreEmplado.value,
      noEmpleado: this.NoEmpleado.value,
      diasdeVacaciones: this.DiasdeVacaciones.value,
      fechaIngreso: this.FechaIngreso.value,
    };
  }
}

export interface EmpleadoPrimitive {
  empleadoId: string;
  nombreEmplado: string;
  noEmpleado: number;
  diasdeVacaciones: number;
  fechaIngreso: Date;
}
