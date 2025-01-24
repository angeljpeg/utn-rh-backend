import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
export const UsuariosSchema = mysqlTable('usuarios', {
  usuarioId: varchar({ length: 36 }).primaryKey(),
  matricula: varchar({ length: 8 }).notNull(),
  password: varchar({ length: 8 }).notNull(),
});
