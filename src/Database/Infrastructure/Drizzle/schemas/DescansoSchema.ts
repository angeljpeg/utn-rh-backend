import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const DescansoSchema = mysqlTable('descansos', {
  id: int().autoincrement().primaryKey(),
  nombre: varchar({ length: 50 }).notNull(),
  descripcion: varchar({ length: 50 }).notNull(),
});
