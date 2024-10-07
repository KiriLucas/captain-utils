import { CommonHelper } from '../../internal/common/helper/common.helper';
import { ObjectHelper } from '../../internal/object/object.helper';
import { ObjectUtilsValidator } from '../../internal/object/object.validator';
import { IsEmptyOptions } from './options/is-empty-options';
import { OrderingOptions } from './options/ordering-options.types';

export class ObjectUtilities {
  static orderObjectBy<T extends object>(
    input: Array<T>,
    property: keyof T,
    options: OrderingOptions = new OrderingOptions(),
  ): Array<T> {
    if (ObjectHelper.isFalsy(options.ignoreTypeValidation)) {
      ObjectUtilsValidator.validateOrderBy(input);
    }

    const clonedInput = CommonHelper.deepClone<typeof input>(input);

    if (ObjectHelper.isEmptyObject(clonedInput)) return clonedInput;

    return clonedInput.sort((leftObject: T, rightObject: T) => {
      return String(leftObject[property]).localeCompare(String(rightObject[property]), undefined, {
        numeric: true,
        sensitivity: 'base',
      });
    });
  }

  static isEmpty(input: unknown, options: IsEmptyOptions = new IsEmptyOptions()): boolean {
    if (ObjectHelper.isFalsy(options.ignoreTypeValidation)) {
      ObjectUtilsValidator.validateIsEmptyInput(input);
    }

    if (Array.isArray(input)) {
      return input.flat(10).every((element) => ObjectUtilities.isEmpty(element, { ignoreTypeValidation: true }));
    }

    return ObjectHelper.isEmpty(input);
  }

  static isNotEmpty(target: object): boolean {
    return !ObjectUtilities.isEmpty(target);
  }
}
