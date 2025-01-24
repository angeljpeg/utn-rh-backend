import { drizzle } from 'drizzle-orm/mysql2';
import { env } from '@/src/Shared/Infrastructure/EnviromentContainer';

export const db = drizzle(env.DATABASE_URL);
