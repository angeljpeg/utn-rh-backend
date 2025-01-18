export class InvalidDataException extends Error {
  private campo?: string;
  private data?: unknown;

  public constructor(
    messageOrObject: string | { message: string; campo?: string; data?: unknown },
  ) {
    if (typeof messageOrObject === 'string') {
      super(messageOrObject);
    } else {
      super(messageOrObject.message);
      this.campo = messageOrObject.campo;
      this.data = messageOrObject.data;
    }
    this.name = 'InvalidDataException';
  }
}
