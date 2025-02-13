import { NotFoundException } from '@/src/Shared/Domain/Exceptions/NotFound';
import { BeneficiarioRepository } from '../../Domain/Entities/BeneficiarioRepository';
import { BeneficiarioPrimitive } from '../../Domain/Interface/BeneficiarioPrimitive';

export class GetBeneficiarioById {
  public constructor(private readonly beneficiarioRepo: BeneficiarioRepository) {}

  public async run(id: number): Promise<BeneficiarioPrimitive | null> {
    const beneficiaro = await this.beneficiarioRepo.getById(id);

    if (!beneficiaro) {
      throw new NotFoundException({
        message: `El beneficiario con el id ${id} no fue encontrado`,
        campo: '/:id',
        data: id,
      });
    }

    return beneficiaro;
  }
}
