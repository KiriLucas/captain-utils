export class CommonHelper {
  static deepClone<T>(input: T): T {
    return JSON.parse(JSON.stringify(input)) as T;
  }
}
