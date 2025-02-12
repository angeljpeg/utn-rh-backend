import { PrestacionRepository } from '../../Domain/Entities/PrestacionRepository';

export class DeletePrestacion {
  public constructor(private readonly prestacionRepo: PrestacionRepository) {}

  public async run(id: number): Promise<void> {
    await this.prestacionRepo.getById(id);
    await this.prestacionRepo.delete(id);
  }
}
