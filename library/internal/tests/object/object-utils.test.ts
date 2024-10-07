import { ObjectUtilities } from '../../../library/object/object-utils';
import { CommonHelper } from '../../common/helper/common.helper';
import { IsEmptyInvalidParametersException } from '../../object/exceptions/is-empty-invalid-parameters.exception';
import { OrderObjectByInvalidParametersException } from '../../object/exceptions/order-object-by-invalid-parameters.exception';
import {
  ARRAY_OF_NULL,
  ARRAY_OF_UNDEFINED,
  ARRAY_WITH_EMPTY_OBJECT,
  EMPTY_ARRAY,
  ARRAY_OF_EMPTY_LIKE,
  NESTED_ARRAY,
  NESTED_ARRAY_OF_EMPTY_OBJECT,
  NESTED_ARRAY_OF_EMPTY_LIKE,
  ARRAY_OF_FALSY,
  UNORDERED_ARRAY_OF_OBJECTS,
  ORDERED_ARRAY_OF_OBJECTS,
} from '../common.mock';

describe('ObjectUtilities', () => {
  describe('orderBy', () => {
    describe('invalid input', () => {
      it.each(ARRAY_OF_FALSY)(
        'should throw a OrderObjectByInvalidParametersException exception when %p is provided as input',
        (input) => {
          const sortSpy = jest.spyOn(Array.prototype, 'sort');

          expect(() => ObjectUtilities.orderObjectBy(input, 'property')).toThrow(OrderObjectByInvalidParametersException);
          expect(sortSpy).not.toHaveBeenCalled();
        },
      );

      it.each(ARRAY_OF_FALSY)('should return the immuted input when %p is provided as property', (input) => {
        const sortSpy = jest.spyOn(Array.prototype, 'sort');

        expect(() => ObjectUtilities.orderObjectBy(input, 'property')).toThrow(OrderObjectByInvalidParametersException);
        expect(sortSpy).not.toHaveBeenCalled();
      });
    });

    describe('ordered input', () => {
      it('should return an empty array when an empty array is provided', () => {
        const sortSpy = jest.spyOn(Array.prototype, 'sort');

        expect(ObjectUtilities.orderObjectBy(EMPTY_ARRAY, 'proper')).toStrictEqual(EMPTY_ARRAY);
        expect(sortSpy).not.toHaveBeenCalled();
      });

      it('should return an empty array when an empty array is provided', () => {
        const sortSpy = jest.spyOn(Array.prototype, 'sort');

        expect(ObjectUtilities.orderObjectBy(EMPTY_ARRAY, 'proper')).toStrictEqual(EMPTY_ARRAY);
        expect(sortSpy).not.toHaveBeenCalled();
      });

      it('should return an ordered array without mutating the original array', () => {
        const unorderedArray = CommonHelper.deepClone(UNORDERED_ARRAY_OF_OBJECTS);
        const orderedArray = ObjectUtilities.orderObjectBy(unorderedArray, 'level');

        expect(orderedArray).toMatchObject(ORDERED_ARRAY_OF_OBJECTS);
        expect(unorderedArray).toMatchObject(UNORDERED_ARRAY_OF_OBJECTS);
      });
    });
  });

  describe('isEmpty', () => {
    describe('empty values', () => {
      it('should return true when undefined is provided', () => {
        expect(ObjectUtilities.isEmpty(undefined)).toBe(true);
      });

      it('should return true when null is provided', () => {
        expect(ObjectUtilities.isEmpty(null)).toBe(true);
      });

      it('should return true when an empty array is provided', () => {
        expect(ObjectUtilities.isEmpty([])).toBe(true);
      });

      it('should return true when an empty object is provided', () => {
        expect(ObjectUtilities.isEmpty({})).toBe(true);
      });

      it('should return true when an empty string is provided', () => {
        expect(ObjectUtilities.isEmpty('')).toBe(true);
      });

      it('should return true when an array of empty objects is provided', () => {
        expect(ObjectUtilities.isEmpty(ARRAY_WITH_EMPTY_OBJECT)).toBe(true);
      });

      it('should return true when an array with of undefined is provided', () => {
        expect(ObjectUtilities.isEmpty(ARRAY_OF_UNDEFINED)).toBe(true);
      });

      it('should return true when an array of null is provided', () => {
        expect(ObjectUtilities.isEmpty(ARRAY_OF_NULL)).toBe(true);
      });

      it('should return true when an array of falsy values is provided', () => {
        expect(ObjectUtilities.isEmpty(ARRAY_OF_EMPTY_LIKE)).toBe(true);
      });

      it('should return true when a nested empty array is provided', () => {
        expect(ObjectUtilities.isEmpty(NESTED_ARRAY)).toBe(true);
      });

      it('should return true when a nested array of empty objects is provided', () => {
        expect(ObjectUtilities.isEmpty(NESTED_ARRAY_OF_EMPTY_OBJECT)).toBe(true);
      });

      it('should return true when a nested array of falsy values is provided', () => {
        expect(ObjectUtilities.isEmpty(NESTED_ARRAY_OF_EMPTY_LIKE)).toBe(true);
      });
    });

    describe('not empty values', () => {
      it('should return false when an array of numbers is provided', () => {
        expect(ObjectUtilities.isEmpty([0])).toBe(false);
      });
    });

    describe('input validation', () => {
      describe('invalid input', () => {
        it('should throw a IsEmptyInvalidParametersException when a number is provided', () => {
          const wrappedFunction = () => ObjectUtilities.isEmpty(0);
          expect(wrappedFunction).toThrow(IsEmptyInvalidParametersException);
        });

        it('should throw a IsEmptyInvalidParametersException when a bigint is provided', () => {
          const wrappedFunction = () => ObjectUtilities.isEmpty(10n);
          expect(wrappedFunction).toThrow(IsEmptyInvalidParametersException);
        });

        it('should throw a IsEmptyInvalidParametersException when a boolean is provided', () => {
          const wrappedFunction = () => ObjectUtilities.isEmpty(true);
          expect(wrappedFunction).toThrow(IsEmptyInvalidParametersException);
        });

        it('should throw a IsEmptyInvalidParametersException when a symbol is provided', () => {
          const wrappedFunction = () => ObjectUtilities.isEmpty(Symbol('abc'));
          expect(wrappedFunction).toThrow(IsEmptyInvalidParametersException);
        });
      });

      describe('disabled validation', () => {
        it('should not throw a exception when a number is provided and ignoreTypeValidation is true', () => {
          const wrappedFunction = () => ObjectUtilities.isEmpty(0, { ignoreTypeValidation: true });
          expect(wrappedFunction).not.toThrow();
        });

        it('should not throw a exception when a bigint is provided and ignoreTypeValidation is true', () => {
          const wrappedFunction = () => ObjectUtilities.isEmpty(10n, { ignoreTypeValidation: true });
          expect(wrappedFunction).not.toThrow();
        });

        it('should not throw a exception when a boolean is provided and ignoreTypeValidation is true', () => {
          const wrappedFunction = () => ObjectUtilities.isEmpty(true, { ignoreTypeValidation: true });
          expect(wrappedFunction).not.toThrow();
        });

        it('should not throw a exception when a symbol is provided and ignoreTypeValidation is true', () => {
          const wrappedFunction = () => ObjectUtilities.isEmpty(Symbol('abc'), { ignoreTypeValidation: true });
          expect(wrappedFunction).not.toThrow();
        });
      });
    });
  });
});
