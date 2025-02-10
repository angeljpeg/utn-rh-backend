import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { BeneficiarioId } from './BeneficiarioId';
import { BeneficiarioNombre } from './BeneficiarioNombre';
import { BeneficiariosParentesco } from './BeneficiariosParentesco';
import { BeneficiarioNivelEducativo } from './BeneficiarioNivelEducativo';

export class Beneficiario {
  public BeneficiarioiId: BeneficiarioId;
  public EmpleadoId: EmpleadoNumero;
  public Nombre: BeneficiarioNombre;
  public Parentesco: BeneficiariosParentesco;
  public NivelEducativo?: BeneficiarioNivelEducativo;

  public constructor(
    id: BeneficiarioId,
    empleado: EmpleadoNumero,
    nombre: BeneficiarioNombre,
    parentesco: BeneficiariosParentesco,
    nivelEducativo?: BeneficiarioNivelEducativo,
  ) {
    this.BeneficiarioiId = id;
    this.EmpleadoId = empleado;
    this.Nombre = nombre;
    this.Parentesco = parentesco;
    this.NivelEducativo = nivelEducativo;
  }
}
