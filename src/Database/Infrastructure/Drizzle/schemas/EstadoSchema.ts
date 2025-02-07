import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const EstadoSchema = mysqlTable('estados', {
  id: int().primaryKey(),
  nombre: varchar({ length: 50 }).notNull(),
  descripcion: varchar({ length: 50 }),
});
