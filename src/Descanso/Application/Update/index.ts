import { DescansoRepository } from '../../Domain/Entities/DescansoRepository';
import { DescansoPrimitive } from '../../Domain/Interface/DescansoPrimitive';

export class UpdateDescanso {
  public constructor(private readonly descansoRepo: DescansoRepository) {}

  public async run(id: number, descanso: DescansoPrimitive): Promise<void> {
    await this.descansoRepo.getById(id);
    await this.descansoRepo.update(id, descanso);
  }
}
