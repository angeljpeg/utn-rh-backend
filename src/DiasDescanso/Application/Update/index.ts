import { DescansoRepository } from '@/src/Descanso/Domain/Entities/DescansoRepository';
import { DiasDescansoRepository } from '../../Domain/Entities/DiasDescansoRepository';
import { DiasDescansoPrimitive } from '../../Domain/Interface/DiasDescansoPrimitive';

export class UpdateDiasDescanso {
  public constructor(
    private readonly diasDescansoRepository: DiasDescansoRepository,
    private readonly descansoRepo: DescansoRepository,
  ) {}

  public async run(id: number, diasDescanso: DiasDescansoPrimitive): Promise<void> {
    await this.descansoRepo.getById(diasDescanso.descanso_id);
    await this.diasDescansoRepository.update(id, diasDescanso);
  }
}
