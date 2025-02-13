import { BeneficiarioPrimitive } from '../Interface/BeneficiarioPrimitive';

export interface BeneficiarioRepository {
  create(beneficiario: BeneficiarioPrimitive): Promise<void>;
}
