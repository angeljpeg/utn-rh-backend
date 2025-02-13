import { IQuery } from '@/src/Shared/Domain/Interfaces/Query';
import { BeneficiarioPrimitive } from '../Interface/BeneficiarioPrimitive';

export interface BeneficiarioRepository {
  create(beneficiario: BeneficiarioPrimitive): Promise<void>;
  getAll(query: IQuery<BeneficiarioPrimitive>): Promise<BeneficiarioPrimitive[]>;
  getById(id: number): Promise<BeneficiarioPrimitive | null>;
  update(id: number, beneficiario: BeneficiarioPrimitive): Promise<void>;
  delete(id: number): Promise<void>;
}
