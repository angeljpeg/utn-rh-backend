import { EmpleadoRepository } from '@/src/Empleados/Domain/Entities/EmpleadoRepository';
import { BeneficiarioRepository } from '../../Domain/Entities/BeneficiarioRepository';
import { ParentescoRepository } from '@/src/Parentesco/Domain/Entities/ParentescoRepository';
import { BeneficiarioId } from '../../Domain/Entities/BeneficiarioId';
import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { BeneficiarioNombre } from '../../Domain/Entities/BeneficiarioNombre';
import { ParentescoId } from '@/src/Parentesco/Domain/Entities/ParentescoId';
import { BeneficiarioPrimitive } from '../../Domain/Interface/BeneficiarioPrimitive';
import { Beneficiario } from '../../Domain/Entities/Beneficiario';
import { BeneficiarioNivelEducativo } from '../../Domain/Entities/BeneficiarioNivelEducativo';

export class UpdateBeneficiario {
  public constructor(
    private readonly beneficiarioRepo: BeneficiarioRepository,
    private readonly parentescoRepo: ParentescoRepository,
    private readonly empleadoRepo: EmpleadoRepository,
  ) {}

  public async run(id: number, beneficiario: Omit<BeneficiarioPrimitive, 'id'>): Promise<void> {
    await this.beneficiarioRepo.getById(id);
    if (beneficiario.empleado_id) await this.empleadoRepo.getById(beneficiario.empleado_id);
    if (beneficiario.parentesco_id) await this.parentescoRepo.getById(beneficiario.parentesco_id);

    const newBeneficiario = new Beneficiario(
      new BeneficiarioId(id),
      new EmpleadoNumero(beneficiario.empleado_id),
      new BeneficiarioNombre(beneficiario.nombre),
      new ParentescoId(beneficiario.parentesco_id),
      new BeneficiarioNivelEducativo(beneficiario.nivel_educativo),
    );

    return this.beneficiarioRepo.update(id, newBeneficiario.toBeneficiarioPrimitive());
  }
}
