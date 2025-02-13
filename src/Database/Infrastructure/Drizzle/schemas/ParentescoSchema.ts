import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const ParentescoSchema = mysqlTable('parentescos', {
  id: int().autoincrement().primaryKey(),
  nombre: varchar({ length: 50 }).notNull(),
  grado: int().notNull(),
});
