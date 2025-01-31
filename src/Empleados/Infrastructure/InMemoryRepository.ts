import { InvalidDataException } from '@/src/Shared/Domain/Exceptions/InvalidDataException';
import { Empleado } from '../Domain/Empleado';
import { EmpleadoID } from '../Domain/EmpleadoId';
import { EmpleadoRepository } from '../Domain/EmpleadoRepository';

export class InMemoryEmpleadosRepository implements EmpleadoRepository {
  public empleados: Empleado[] = [];
  private readonly validFields = [
    'noEmpleado',
    'nombreEmpleado',
    'fechaIngreso',
    'diasVacaciones',
  ] as const;

  public async create(empleado: Empleado): Promise<void> {
    this.empleados.push(empleado);
  }

  public async getAll(): Promise<Empleado[]> {
    return this.empleados;
  }

  public async getBy(campo: string, value: string): Promise<Empleado[]> {
    if (!this.validFields.includes(campo as (typeof this.validFields)[number])) {
      throw new InvalidDataException({
        message: 'Campo Invalido',
        campo: campo,
        data: value,
      });
    }
    return this.empleados.filter(e => {
      switch (campo) {
        case 'noEmpleado':
          return e.noEmpleado.value.toString() === value;
        case 'nombreEmpleado':
          return e.nombreEmpleado.value === value;
        case 'fechaIngreso':
          return e.fechaIngreso.value.toString() === value;
        case 'diasVacaciones':
          return e.diasVacaciones.value.toString() === value;
        default:
          return false;
      }
    });
  }

  public async getById(id: EmpleadoID): Promise<Empleado | null> {
    const index = this.empleados.findIndex(e => e.empleadoId.value === id.value);

    return this.empleados[index] || null;
  }

  public async getOneBy(campo: string, value: string): Promise<Empleado | null> {
    if (!this.validFields.includes(campo as (typeof this.validFields)[number])) {
      throw new InvalidDataException({
        message: 'Campo Invalido',
        campo: campo,
        data: value,
      });
    }
    const empleado = this.empleados.find(e => {
      switch (campo) {
        case 'noEmpleado':
          return e.noEmpleado.value.toString() === value;
        case 'nombreEmpleado':
          return e.nombreEmpleado.value === value;
        case 'fechaIngreso':
          return e.fechaIngreso.value.toString() === value;
        case 'diasVacaciones':
          return e.diasVacaciones.value.toString() === value;
        default:
          return false;
      }
    });

    return empleado || null;
  }

  public async update(empleado: Empleado): Promise<void> {
    const index = this.empleados.findIndex(e => e.empleadoId.value === empleado.empleadoId.value);
    this.empleados[index] = empleado;
  }

  public async delete(id: EmpleadoID): Promise<void> {
    this.empleados.filter(e => e.empleadoId.value !== id.value);
  }
}
