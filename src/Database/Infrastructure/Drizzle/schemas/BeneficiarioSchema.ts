import { int, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { EmpleadoSchema } from './EmpleadoSchema';
import { ParentescoSchema } from './ParentescoSchema';
import { NIVEL_EDUCATIVO } from '@/src/Beneficiarios/Domain/Interface/NivelEducativo';

export const BeneficiarioSchema = mysqlTable('beneficiarios', {
  id: int().autoincrement().primaryKey(),
  empleado_id: int().references(() => EmpleadoSchema.id).notNull(),
  nombre: varchar({ length: 50 }).notNull(),
  parentesco_id: int().references(() => ParentescoSchema.id).notNull(),
  nivel_educativo: mysqlEnum(NIVEL_EDUCATIVO).notNull(),
});

