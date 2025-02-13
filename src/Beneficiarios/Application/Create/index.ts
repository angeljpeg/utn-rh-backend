import { ParentescoRepository } from '@/src/Parentesco/Domain/Entities/ParentescoRepository';
import { BeneficiarioRepository } from '../../Domain/Entities/BeneficiarioRepository';
import { CreateBeneficiarioDto } from '../../Domain/Interface/CreateBeneficiarioDto';
import { BeneficiarioId } from '../../Domain/Entities/BeneficiarioId';
import { BeneficiarioNombre } from '../../Domain/Entities/BeneficiarioNombre';
import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { ParentescoId } from '@/src/Parentesco/Domain/Entities/ParenetescoId';
import { Beneficiario } from '../../Domain/Entities/Beneficiario';
import { EmpleadoRepository } from '@/src/Empleados/Domain/Entities/EmpleadoRepository';

export class CreateBeneficiario {
  public constructor(
    private readonly beneficiarioRepo: BeneficiarioRepository,
    private readonly empleadoRepo: EmpleadoRepository,
    private readonly parentescoRepo: ParentescoRepository,
  ) {}

  public async run({ id, empleado, nombre, parentesco }: CreateBeneficiarioDto): Promise<void> {
    await this.parentescoRepo.getById(parentesco);
    await this.empleadoRepo.getById(empleado);

    const newBeneficiario = new Beneficiario(
      id ? new BeneficiarioId(id) : BeneficiarioId.random(),
      new EmpleadoNumero(empleado),
      new BeneficiarioNombre(nombre),
      new ParentescoId(parentesco),
    );

    await this.beneficiarioRepo.create(newBeneficiario.toBeneficiarioPrimitive());
  }
}
