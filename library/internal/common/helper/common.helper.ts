export class CommonHelper {
  static deepClone<T>(input: T): T {
    return JSON.parse(JSON.stringify(input)) as T;
  }

  static isNullOrUndefined(input: unknown): boolean {
    return Object.is(null, input) || Object.is(undefined, input);
  }

  static isFalsy(input: unknown): boolean {
    return !input;
  }
}
