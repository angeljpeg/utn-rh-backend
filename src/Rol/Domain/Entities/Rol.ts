import { RolId } from './RolId';
import { RolNombre } from './RolNombre';

export class Rol {
  public RolID: RolId;
  public RolNombre: RolNombre;

  public constructor(id: RolId, nombre: RolNombre) {
    this.RolID = id;
    this.RolNombre = nombre;
  }
}
