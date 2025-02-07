import { date, int, mysqlTable } from 'drizzle-orm/mysql-core';
import { DescansoSchema } from './DescansoSchema';

export const DiasDescansoSchema = mysqlTable('dias_descansos', {
  id: int().autoincrement().primaryKey(),
  descanso_id: int().references(() => DescansoSchema.id),
  fecha: date().notNull(),
});
