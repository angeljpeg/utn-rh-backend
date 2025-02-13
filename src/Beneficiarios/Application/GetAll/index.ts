import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { BeneficiarioPrimitive } from '../../Domain/Interface/BeneficiarioPrimitive';
import { BeneficiarioRepository } from '../../Domain/Entities/BeneficiarioRepository';

export class GetAllBeneficiarios {
  public constructor(private readonly beneficiarioRepo: BeneficiarioRepository) {}

  public async run(query: IQuery<BeneficiarioPrimitive>): Promise<BeneficiarioPrimitive[]> {
    return await this.beneficiarioRepo.getAll(query);
  }
}
