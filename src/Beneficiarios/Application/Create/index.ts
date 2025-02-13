import { ParentescoRepository } from '@/src/Parentesco/Domain/Entities/ParentescoRepository';
import { BeneficiarioRepository } from '../../Domain/Entities/BeneficiarioRepository';
import { CreateBeneficiarioDto } from '../../Domain/Interface/CreateBeneficiarioDto';
import { BeneficiarioId } from '../../Domain/Entities/BeneficiarioId';
import { BeneficiarioNombre } from '../../Domain/Entities/BeneficiarioNombre';
import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { ParentescoId } from '@/src/Parentesco/Domain/Entities/ParentescoId';
import { Beneficiario } from '../../Domain/Entities/Beneficiario';
import { EmpleadoRepository } from '@/src/Empleados/Domain/Entities/EmpleadoRepository';
import { BeneficiarioNivelEducativo } from '../../Domain/Entities/BeneficiarioNivelEducativo';

export class CreateBeneficiario {
  public constructor(
    private readonly beneficiarioRepo: BeneficiarioRepository,
    private readonly empleadoRepo: EmpleadoRepository,
    private readonly parentescoRepo: ParentescoRepository,
  ) {}

  public async run({ id, empleado_id, nombre, parentesco_id, nivel_educativo }: CreateBeneficiarioDto): Promise<void> {
    await this.parentescoRepo.getById(parentesco_id);
    await this.empleadoRepo.getById(empleado_id);

    const newBeneficiario = new Beneficiario(
      id ? new BeneficiarioId(id) : BeneficiarioId.random(),
      new EmpleadoNumero(empleado_id),
      new BeneficiarioNombre(nombre),
      new ParentescoId(parentesco_id),
      new BeneficiarioNivelEducativo(nivel_educativo),
    );

    await this.beneficiarioRepo.create(newBeneficiario.toBeneficiarioPrimitive());
  }
}
