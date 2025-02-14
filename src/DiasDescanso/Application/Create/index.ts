import { DescansoRepository } from '@/src/Descanso/Domain/Entities/DescansoRepository';
import { DiasDescansoRepository } from '../../Domain/Entities/DiasDescansoRepository';
import { CreateDiasDescansoDto } from '../../Domain/Interface/CreateDiasDescansoDto';

export class CreateDiasDescanso {
  public constructor(
    private readonly diasDescansoRepository: DiasDescansoRepository,
    private readonly descansoRepo: DescansoRepository,
  ) {}

  public async run(diasDescanso: CreateDiasDescansoDto): Promise<void> {
    await this.descansoRepo.getById(diasDescanso.descanso_id);
    await this.diasDescansoRepository.create(diasDescanso);
  }
}
