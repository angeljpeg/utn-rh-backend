import { z } from 'zod';

export const ENUM_NODE_ENV = {
  development: 'development',
  production: 'production',
} as const;

export const environmentSchema = z.object({
  NODE_ENV: z.enum([ENUM_NODE_ENV.development, ENUM_NODE_ENV.production]),
  PORT: z.number().int().positive(),
});

export type Environment = z.infer<typeof environmentSchema>;
