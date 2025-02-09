import { DescasnoDescripcion } from './DescansoDescripcion';
import { DescansoId } from './DescansoId';
import { DescansoNombre } from './DescansoNombre';

export class Descanso {
  public DescansoId: DescansoId;
  public DescansoNombre: DescansoNombre;
  public DescansoDescripcion: DescasnoDescripcion;
  public constructor(id: DescansoId, nombre: DescansoNombre, descripcion: DescasnoDescripcion) {
    this.DescansoId = id;
    this.DescansoNombre = nombre;
    this.DescansoDescripcion = descripcion;
  }
}
