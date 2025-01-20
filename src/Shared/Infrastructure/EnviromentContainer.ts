import { Environment, environmentSchema } from '../Domain/Entities/Environment';
process.loadEnvFile()

const parseEnv = (): Environment => {
  const envValues = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000,
  };

  const result = environmentSchema.safeParse(envValues);

  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.format());
    throw new Error('Invalid environment variables');
  }

  return result.data;
};

export const env: Environment = parseEnv();
