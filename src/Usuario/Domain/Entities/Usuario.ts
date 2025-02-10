import { UsuarioId } from './UsuarioId';
import { UsuarioNombre } from './UsuarioNombre';
import { UsuarioPassword } from './UsuarioPassword';
import { RolId } from '@/src/Rol/Domain/Entities/RolId';
import { EmpleadoNumero } from '@/src/Empleados/Domain/Entities/EmpleadoNumero';

export class Usuario {
  public UsuarioId: UsuarioId;
  public UsuarioName: UsuarioNombre;
  public UsuarioPassword: UsuarioPassword;
  public rolId: RolId;
  public empleadoId: EmpleadoNumero;
  public constructor(
    id: UsuarioId,
    nombre: UsuarioNombre,
    password: UsuarioPassword,
    rol: RolId,
    empleado: EmpleadoNumero,
  ) {
    this.UsuarioId = id;
    this.UsuarioName = nombre;
    this.UsuarioPassword = password;
    this.rolId = rol;
    this.empleadoId = empleado;
  }
}
