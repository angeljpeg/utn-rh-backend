import { PrestacionPrimitive } from '../Interfaces/PrestacionPrimitive';
import { PrestacionAntiguedadMinima } from './PrestacionAntiguedadMinima';
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
  public Monto_Maximo: PrestacionMonto;
  public Frecuencia: PrestacionFrecuencia;
  public Requisitos: PrestacionRequisitos;
  public Antigueda_Minima: PrestacionAntiguedadMinima;
  public constructor(
    id: PrestacionId,
    nombre: PrestacionNombre,
    descripcion: PrestacionDescripcion,
    monto_maximo: PrestacionMonto,
    frecuencia: PrestacionFrecuencia,
    requisitos: PrestacionRequisitos,
    antiguedadMinima: PrestacionAntiguedadMinima,
  ) {
    this.Id = id;
    this.Nombre = nombre;
    this.Descripcion = descripcion;
    this.Monto_Maximo = monto_maximo;
    this.Frecuencia = frecuencia;
    this.Requisitos = requisitos;
    this.Antigueda_Minima = antiguedadMinima;
  }

  public toPrestacionPrimitive(): PrestacionPrimitive {
    return {
      id: this.Id.value,
      nombre: this.Nombre.value,
      descripcion: this.Descripcion.value,
      monto_maximo: this.Monto_Maximo.value,
      frecuencia: this.Frecuencia.value,
      requisitos: this.Requisitos.value,
      antiguedad_minima: this.Antigueda_Minima.value,
    };
  }
}
