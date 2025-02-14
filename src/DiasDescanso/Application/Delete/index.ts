import { DiasDescansoRepository } from '../../Domain/Entities/DiasDescansoRepository';

export class DeleteDiasDescanso {
  public constructor(private readonly diasDescansoRepository: DiasDescansoRepository) {}
  public async run(id: number): Promise<void> {
    await this.diasDescansoRepository.delete(id);
  }
}
