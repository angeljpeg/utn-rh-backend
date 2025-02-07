import { decimal, int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';

export const PrestacionSchema = mysqlTable('prestaciones', {
  id: int().autoincrement().primaryKey(),
  nombre: varchar({ length: 50 }).notNull(),
  descripcion: text().notNull(),
  monto_maximo: decimal().notNull(),
  frecuencia: varchar({ length: 20 }).notNull(),
  requisitos: text().notNull(),
  antiguedad_minima: decimal().notNull(),
});
