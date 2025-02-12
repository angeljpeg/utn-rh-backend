
import { EmpleadoPrimitive } from '../Interfaces/EmpleadoPrimitive';
import { EmpleadoAntiguedad } from './EmpleadoAntiguedad';
import { EmpleadoFechaIngreso } from './EmpleadoFechaIngreso';
import { EmpleadoGenero } from './EmpleadoGenero';
import { EmpleadoNombre } from './EmpleadoNombre';
import { EmpleadoNumero } from './EmpleadoNumero';

export class Empleado {
  public empleadoNumero : EmpleadoNumero;
  public empleadoNombre : EmpleadoNombre;
  public Genero : EmpleadoGenero;
  public FechaIngreso: EmpleadoFechaIngreso;
  public Antiguedad: EmpleadoAntiguedad;

  public constructor(
    id: EmpleadoNumero,
    nombre: EmpleadoNombre,
    genero: EmpleadoGenero,
    fechaingreso: EmpleadoFechaIngreso,
    antiguedad: EmpleadoAntiguedad,
  ) {
    this.empleadoNumero = id;
    this.empleadoNombre = nombre
    this.Genero=genero
    this.FechaIngreso=fechaingreso
    this.Antiguedad = antiguedad
  }

  public toEmpleadoPrimitive(): EmpleadoPrimitive {
    return {
      id: this.empleadoNumero.value,
      nombre: this.empleadoNombre.value,
      genero: this.Genero.value,
      fecha_ingreso: this.FechaIngreso.value,
      antiguedad: this.Antiguedad.value,
    };
  }
}

