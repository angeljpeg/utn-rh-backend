import { z } from 'zod';
import { Environment, ENUM_NODE_ENV } from '../Domain/Entities/Environment';

const environmentSchema = z.object({
  NODE_ENV: z.enum([ENUM_NODE_ENV.development, ENUM_NODE_ENV.production]),
  PORT: z.number().int().positive(),
});

export function validateEnvironment(env: unknown): Environment {
  return environmentSchema.parse(env);
}
