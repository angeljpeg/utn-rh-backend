import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  dialect: 'mysql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/Database/Infrastructure/Drizzle/schemas',
});
