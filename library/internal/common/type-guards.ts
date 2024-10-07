export class TypeGuard {
  static isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
  }

  static isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  static isSymbol(value: unknown): value is symbol {
    return typeof value === 'symbol';
  }

  static isBigInt(value: unknown): value is bigint {
    return typeof value === 'bigint';
  }

  static isFunction(value: unknown): value is Function {
    return typeof value === 'function';
  }

  static isObject(value: unknown): value is object {
    return typeof value === 'object';
  }

  static isString(value: unknown): value is string {
    return typeof value === 'string';
  }
}
