import { TypeGuard } from '../common/type-guards';

export class NumberHelper {
  static isEmptyNumber(input: number): boolean {
    return TypeGuard.isNumber(input) && !Number.isFinite(input);
  }
}
