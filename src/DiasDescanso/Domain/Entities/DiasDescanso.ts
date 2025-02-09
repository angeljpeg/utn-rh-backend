import { DescansoId } from '@/src/Descanso/Domain/Entities/DescansoId';
import { DiasDescansoFecha } from './DiasDescansoFecha';
import { DiasDescansoId } from './DiasDescansoId';

export class DiasDescanso {
  public DiasDescansoId: DiasDescansoId;
  public DesacansoId: DescansoId;
  public DiasDesacansoFecha: DiasDescansoFecha;

  public constructor(id: DiasDescansoId, descanso: DescansoId, fecha: DiasDescansoFecha) {
    this.DiasDescansoId = id;
    this.DesacansoId = descanso;
    this.DiasDesacansoFecha = fecha;
  }
}
