import { Environment } from '../Domain/Entities/Environment';
import { validateEnvironment } from './EnvironmentValidator';

process.loadEnvFile();

export class EnvironmentContainer {
  private static instance: Environment;

  public static getInstance(): Environment {
    if (!this.instance) {
      const envValues = {
        NODE_ENV: process.env.NODE_ENV,
        PORT: Number(process.env.PORT),
      };

      try {
        this.instance = validateEnvironment(envValues);
      } catch (error) {
        console.error('Error validating environment variables:', error);
        process.exit(1);
      }
    }

    return this.instance;
  }
}
