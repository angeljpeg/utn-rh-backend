import { PrestacionPrimitive } from '../Interfaces/PrestacionPrimitive';
import { PrestacionAntiguedadMinima } from './PrestacionAntiguiedadMinima';
import { PrestacionDescripcion } from './PrestacionDescripcion';
import { PrestacionFrecuencia } from './PrestacionFrecuencia';
import { PrestacionId } from './PrestacionId';
import { PrestacionMonto } from './PrestacionMonto';
import { PrestacionNombre } from './PrestacionNombre';
import { PrestacionRequisitos } from './PrestacionRequisitos';

export class Prestacion {
  public Id: PrestacionId;
  public Nombre: PrestacionNombre;
  public Descripcion: PrestacionDescripcion;
  public Monto: PrestacionMonto;
  public Frecuencia: PrestacionFrecuencia;
  public Requisitos: PrestacionRequisitos;
  public AntiguedadMinima: PrestacionAntiguedadMinima;
  public constructor(
    id: PrestacionId,
    nombre: PrestacionNombre,
    descripcion: PrestacionDescripcion,
    monto: PrestacionMonto,
    frecuencia: PrestacionFrecuencia,
    requisitos: PrestacionRequisitos,
    antiguedadMinima: PrestacionAntiguedadMinima,
  ) {
    this.Id = id;
    this.Nombre = nombre;
    this.Descripcion = descripcion;
    this.Monto = monto;
    this.Frecuencia = frecuencia;
    this.Requisitos = requisitos;
    this.AntiguedadMinima = antiguedadMinima;
  }

  public toPrestacionPrimitive(): PrestacionPrimitive {
    return {
      id: this.Id.value,
      nombre: this.Nombre.value,
      descripcion: this.Descripcion.value,
      monto_maximo: this.Monto.value,
      frecuencia: this.Frecuencia.value,
      requisitos: this.Requisitos.value,
      antiguedad_minima: this.AntiguedadMinima.value,
    };
  }
}
