import { DescansoId } from '@/src/Descanso/Domain/Entities/DescansoId';
import { DiasDescansoFecha } from './DiasDescansoFecha';
import { DiasDescansoId } from './DiasDescansoId';

export class DiasDescanso {
  public DiasDescansoId: DiasDescansoId;
  public DescansoId: DescansoId;
  public DiasDesacansoFecha: DiasDescansoFecha;

  public constructor(id: DiasDescansoId, descanso: DescansoId, fecha: DiasDescansoFecha) {
    this.DiasDescansoId = id;
    this.DescansoId = descanso;
    this.DiasDesacansoFecha = fecha;
  }
}
