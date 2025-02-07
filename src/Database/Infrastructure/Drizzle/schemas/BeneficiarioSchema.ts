import { int, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { EmpleadoSchema } from './EmpleadoSchema';

export const BeneficiarioSchema = mysqlTable('beneficiarios', {
  id: int().autoincrement().primaryKey(),
  empleado_id: int().references(() => EmpleadoSchema.id),
  nombre: varchar({ length: 50 }).notNull(),
  parentesco: mysqlEnum(['MADRE', 'PADRE', 'HERMANO/A', 'HIJO/A', 'OTRO']).notNull(),
});
