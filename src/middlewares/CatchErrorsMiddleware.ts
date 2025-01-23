import { NextFunction, Request, Response } from 'express';

export function catchErrorsMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof Error) {
    console.error('Error:', err.message);
    console.error('Info Error', err.stack);
    res.status(500).json({ message: err.message });
  }

  console.error('Error:', err);
  res.status(500).json({ message: 'Something went wrong :/' });
}
