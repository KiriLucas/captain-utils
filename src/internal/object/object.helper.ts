import { CommonHelper } from '../common/helper/common.helper';
import { TypeGuard } from '../common/type-guards';
import { NumberHelper } from '../number/number.helper';
import { StringHelper } from '../string/string.helper';

export class ObjectHelper {
  static isEmptyObject(input: object): boolean {
    return TypeGuard.isObject(input) && !Object.keys(input).length;
  }

  static isEmpty(input: unknown): boolean {
    return (
      CommonHelper.isNullOrUndefined(input) ||
      StringHelper.isEmptyString(input as string) ||
      NumberHelper.isEmptyNumber(input as number) ||
      ObjectHelper.isEmptyObject(input as object)
    );
  }
}
