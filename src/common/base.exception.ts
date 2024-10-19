export class CaptainUtilsException extends Error {
  cause: string;
  code: string;
  message: string;

  constructor(cause: string, message?: string, code?: string) {
    super(message, { cause });
    this.cause = cause;
    this.message = message ?? 'Something went unexpectedly wrong';
    this.code = code ?? 'UNK';
  }
}
