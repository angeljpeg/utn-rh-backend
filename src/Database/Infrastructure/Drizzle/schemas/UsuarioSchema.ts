import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
export const UsuariosSchema = mysqlTable('usuarios', {
  usuarioId: varchar({ length: 36 }).primaryKey(),
  nombre: varchar({ length: 50 }).notNull(),
  matricula: varchar({ length: 8 }).notNull(),
  password: varchar({ length: 8 }).notNull(),
});
