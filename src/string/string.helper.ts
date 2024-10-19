import { CommonHelper } from '../common/helper/common.helper';
import { TypeGuard } from '../common/type-guards';

export class StringHelper {
  static isEmptyString(input: string): boolean {
    return TypeGuard.isString(input) && CommonHelper.isFalsy(input.trim());
  }
}
