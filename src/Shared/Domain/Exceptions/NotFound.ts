import { CustomError } from '../Entities/CustomError';

export class NotFoundException extends CustomError {
  public constructor(details?: Record<string, unknown>) {
    super({
      statusCode: 404,
      message: 'Resource not found',
      details: details,
      name: 'NotFoundException',
    });
  }
}
