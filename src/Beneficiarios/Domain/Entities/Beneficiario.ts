import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';
import { BeneficiarioId } from './BeneficiarioId';
import { BeneficiarioNombre } from './BeneficiarioNombre';

export class Beneficiario {
  public BeneficiarioiId: BeneficiarioId;
  public EmpleadoId: EmpleadoNumero;
  public BeneficiarioNombre: BeneficiarioNombre;
  public constructor(id: BeneficiarioId, empleado: EmpleadoNumero, nombre: BeneficiarioNombre) {
    this.BeneficiarioiId = id;
    this.EmpleadoId = empleado;
    this.BeneficiarioNombre = nombre;
  }
}
