import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';
export const Usuarios = mysqlTable('users', {
  usuarioId: int(),
  matricula: varchar({ length: 8 }),
  password: varchar({ length: 8 }),
});
