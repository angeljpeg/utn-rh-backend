// Entidades
import { Usuario } from '../Domain/Entities/Usuario';
import { UsuarioId } from '../Domain/Entities/UsuarioId';
import { UsuarioMatricula } from '../Domain/Entities/UsuarioMatricula';
import { UsuarioPassword } from '../Domain/Entities/UsuarioPassword';
import { UsuarioRepository } from '../Domain/Entities/UsuarioRepository';

// Drizzle
import { db } from '@/src/Database/Infrastructure/Drizzle/DrizzleMySQLService';
import { eq } from 'drizzle-orm';
import { UsuariosSchema as usuarios } from '@/src/Database/Infrastructure/Drizzle/schemas/UsuarioSchema';

export class DrizzleMySQLRepository implements UsuarioRepository {
  public async create(usuario: Usuario): Promise<void> {
    await db.insert(usuarios).values({
      usuarioId: usuario.usuarioId.value,
      matricula: usuario.matricula.value,
      password: usuario.password.value,
    });
  }

  public async getAll(): Promise<Usuario[]> {
    const allUsuarios = await db.select().from(usuarios);
    return allUsuarios.map(u => {
      return new Usuario(
        new UsuarioId(u.usuarioId),
        new UsuarioMatricula(u.matricula),
        new UsuarioPassword(u.password),
      );
    });
  }

  public async getById(id: UsuarioId): Promise<Usuario | null> {
    const usuario = await db.select().from(usuarios).where(eq(usuarios.usuarioId, id.value));
    return usuario.length > 0
      ? new Usuario(
          new UsuarioId(usuario[0].usuarioId),
          new UsuarioMatricula(usuario[0].matricula),
          new UsuarioPassword(usuario[0].password),
        )
      : null;
  }

  public async getOneBy(campo: string, value: string): Promise<Usuario | null> {
    const usuario = await db.select().from(usuarios).where(eq(usuarios.campo, value));
    return usuario.length > 0
      ? new Usuario(
          new UsuarioId(usuario[0].usuarioId),
          new UsuarioMatricula(usuario[0].matricula),
          new UsuarioPassword(usuario[0].password),
        )
      : null;
  }

  public async delete(id: UsuarioId): Promise<void> {
    await db.delete(usuarios).where(eq(usuarios.usuarioId, id.value));
  }

  public async update(usuario: Usuario): Promise<void> {
    await db
      .update(usuarios)
      .set({
        matricula: usuario.matricula.value,
        password: usuario.password.value,
      })
      .where(eq(usuarios.usuarioId, usuario.usuarioId.value));
  }

  public async login(matricula: string, password: string): Promise<Usuario | null> {
    const usuario = await db.select().from(usuarios).where(eq(usuarios.matricula, matricula));

    if (usuario[0].password !== password) return null;

    return usuario.length > 0
      ? new Usuario(
          new UsuarioId(usuario[0].usuarioId),
          new UsuarioMatricula(usuario[0].matricula),
          new UsuarioPassword(usuario[0].password),
        )
      : null;
  }
}
