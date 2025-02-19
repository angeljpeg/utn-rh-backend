import { date, decimal, int, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
export const EmpleadoSchema = mysqlTable('empleados', {
  id: int().primaryKey(),
  nombre: varchar({ length: 50 }).notNull(),
  genero: mysqlEnum(['M', 'F']).notNull(),
  fecha_ingreso: date().notNull(),
  antiguedad: decimal().notNull(),
});
