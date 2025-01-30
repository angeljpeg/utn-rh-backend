import { date, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
export const EmpleadoSchema = mysqlTable('empleados', {
  EmpleadoId: varchar({ length: 36 }).primaryKey(),
  nombreEmplado: varchar({ length: 50 }).notNull(),
  NoEmpleado: int().notNull().unique(),
  FechadeIngreso: date().notNull(),
  DiasVacaciones: int().notNull(),
});
