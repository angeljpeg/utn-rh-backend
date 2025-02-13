import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { BeneficiarioId } from './BeneficiarioId';
import { BeneficiarioNombre } from './BeneficiarioNombre';
import { BeneficiarioNivelEducativo } from './BeneficiarioNivelEducativo';
import { ParentescoId } from '@/src/Parentesco/Domain/Entities/ParentescoId';
import { BeneficiarioPrimitive } from '../Interface/BeneficiarioPrimitive';

export class Beneficiario {
  public BeneficiarioiId: BeneficiarioId;
  public EmpleadoId: EmpleadoNumero;
  public Nombre: BeneficiarioNombre;
  public Parentesco: ParentescoId;
  public NivelEducativo?: BeneficiarioNivelEducativo;

  public constructor(
    id: BeneficiarioId,
    empleado: EmpleadoNumero,
    nombre: BeneficiarioNombre,
    parentesco: ParentescoId,
    nivelEducativo?: BeneficiarioNivelEducativo,
  ) {
    this.BeneficiarioiId = id;
    this.EmpleadoId = empleado;
    this.Nombre = nombre;
    this.Parentesco = parentesco;
    this.NivelEducativo = nivelEducativo;
  }

  public toBeneficiarioPrimitive(): BeneficiarioPrimitive {
    return {
      id: this.BeneficiarioiId.value,
      empleado: this.EmpleadoId.value,
      nombre: this.Nombre.value,
      parentesco: this.Parentesco.value,
    };
  }
}
