import { BeneficiarioRepository } from '../../Domain/Entities/BeneficiarioRepository';

export class DeleteBeneficiario {
  public constructor(private readonly beneficiarioRepo: BeneficiarioRepository) {}

  public async run(id: number): Promise<void> {
    await this.beneficiarioRepo.getById(id);
    await this.beneficiarioRepo.delete(id);
  }
}
