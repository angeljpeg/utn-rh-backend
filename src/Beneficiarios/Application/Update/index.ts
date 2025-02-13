import { EmpleadoRepository } from '@/src/Empleados/Domain/Entities/EmpleadoRepository';
import { BeneficiarioRepository } from '../../Domain/Entities/BeneficiarioRepository';
import { ParentescoRepository } from '@/src/Parentesco/Domain/Entities/ParentescoRepository';
import { BeneficiarioId } from '../../Domain/Entities/BeneficiarioId';
import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { BeneficiarioNombre } from '../../Domain/Entities/BeneficiarioNombre';
import { ParentescoId } from '@/src/Parentesco/Domain/Entities/ParenetescoId';
import { BeneficiarioPrimitive } from '../../Domain/Interface/BeneficiarioPrimitive';
import { Beneficiario } from '../../Domain/Entities/Beneficiario';

export class UpdateBeneficiario {
  public constructor(
    private readonly beneficiarioRepo: BeneficiarioRepository,
    private readonly parentescoRepo: ParentescoRepository,
    private readonly empleadoRepo: EmpleadoRepository,
  ) {}

  public async run(id: number, beneficiario: Omit<BeneficiarioPrimitive, 'id'>): Promise<void> {
    await this.beneficiarioRepo.getById(id);
    if (beneficiario.empleado) await this.empleadoRepo.getById(beneficiario.empleado);
    if (beneficiario.parentesco) await this.parentescoRepo.getById(beneficiario.parentesco);

    const newBeneficiario = new Beneficiario(
      new BeneficiarioId(id),
      new EmpleadoNumero(beneficiario.empleado),
      new BeneficiarioNombre(beneficiario.nombre),
      new ParentescoId(beneficiario.parentesco),
    );

    return this.beneficiarioRepo.update(id, newBeneficiario.toBeneficiarioPrimitive());
  }
}
