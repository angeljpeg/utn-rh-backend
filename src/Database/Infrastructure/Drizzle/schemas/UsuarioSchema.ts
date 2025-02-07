import { mysqlTable, varchar, int } from 'drizzle-orm/mysql-core';
import { EmpleadoSchema } from './EmpleadoSchema';
import { RolSchema } from './RolSchema';
export const UsuariosSchema = mysqlTable('usuarios', {
  usuario_id: int().autoincrement().primaryKey(),
  empleado_id: int().references(() => EmpleadoSchema.id),
  password: varchar({ length: 255 }).notNull(),
  rol_id: int().references(() => RolSchema.id),
});
