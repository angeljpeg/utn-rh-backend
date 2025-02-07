import { int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';

export const RolSchema = mysqlTable('roles', {
  id: int().autoincrement().primaryKey(),
  nombre: varchar({ length: 50 }).notNull(),
  descripcion: text(),
});
