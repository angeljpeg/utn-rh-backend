import { BeneficiarioPrimitive } from './BeneficiarioPrimitive';

export type UpdateBeneficiarioDto = Partial<Omit<BeneficiarioPrimitive, 'id'>>;
