import { date, int, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
export const EmpleadoSchema = mysqlTable('empleados', {
  id: int().autoincrement().primaryKey(),
  nombre: varchar({ length: 50 }).notNull(),
  genero: mysqlEnum(['M', 'F']).notNull(),
  fecha_ingreso: date().notNull(),
  antiguedad: int().notNull(),
});
