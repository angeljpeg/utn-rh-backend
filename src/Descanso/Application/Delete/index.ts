import { DescansoRepository } from '../../Domain/Entities/DescansoRepository';

export class DeleteDescanso {
  public constructor(private readonly descansoRepo: DescansoRepository) {}

  public async run(id: number): Promise<void> {
    await this.descansoRepo.getById(id);
    await this.descansoRepo.delete(id);
  }
}
