import { DiasdeVacaciones } from './DiasdeVacaciones';
import { EmpleadoID } from './EmpleadoId';
import { FechaIngreso } from './FechaDeIngreso';
import { NoEmpleado } from './NoEmpleado';
import { NombreEmplado } from './NombreEmpleado';

export class Empleado {
  public empleadoId: EmpleadoID;
  public nombreEmpleado: NombreEmplado;
  public noEmpleado: NoEmpleado;
  public fechaIngreso: FechaIngreso;
  public diasVacaciones: DiasdeVacaciones;

  public constructor(
    empleadoId: EmpleadoID,
    nombreEmplado: NombreEmplado,
    noEmpleado: NoEmpleado,
    fechaIngreso: FechaIngreso,
    diasVacaciones: DiasdeVacaciones,
  ) {
    this.empleadoId = empleadoId;
    this.nombreEmpleado = nombreEmplado;
    this.noEmpleado = noEmpleado;
    this.fechaIngreso = fechaIngreso;
    this.diasVacaciones = diasVacaciones;
  }

  public toPrimitives(): EmpleadoPrimitive {
    return {
      empleadoId: this.empleadoId.value,
      nombreEmplado: this.nombreEmpleado.value,
      noEmpleado: this.noEmpleado.value,
      diasdeVacaciones: this.diasVacaciones.value,
      fechaIngreso: this.fechaIngreso.value,
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
