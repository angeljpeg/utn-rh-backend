import { PrestacionAntiguedadMinima } from "./PrestacionAntiguiedadMinima";
import { PrestacionDescripcion } from "./PrestacionDescripcion";
import { PrestacionFrecuencia } from "./PrestacionFrecuencia";
import { PrestacionId } from "./PrestacionId";
import { PrestacionMonto } from "./PrestacionMonto";
import { PrestacionNombre } from "./PrestacionNombre";
import { PrestacionRequisitos } from "./PrestacionRequisitos";

export class Prestacion{
    public PretacionId:PrestacionId
    public PrestacionNombre:PrestacionNombre
    public PrestacionDescripcion:PrestacionDescripcion
    public PrestacionMonto:PrestacionMonto
    public PrestacionFrecuencia:PrestacionFrecuencia
    public PrestacionRequisitos:PrestacionRequisitos
    public PrestacionAntiguedadMinima:PrestacionAntiguedadMinima
 public constructor(
    id:PrestacionId,
    nombre:PrestacionNombre,
    descripcion:PrestacionDescripcion,
    monto:PrestacionMonto,
    frecuencia:PrestacionFrecuencia,
    requisitos:PrestacionRequisitos,
    antiguedadminima:PrestacionAntiguedadMinima
 ){
   this.PretacionId=id
   this.PrestacionNombre=nombre
   this.PrestacionDescripcion=descripcion
   this.PrestacionMonto=monto
   this.PrestacionFrecuencia=frecuencia
   this.PrestacionRequisitos=requisitos
   this.PrestacionAntiguedadMinima=antiguedadminima
 }
}