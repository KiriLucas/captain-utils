import { TypeGuard } from "../common/type-guards";

export class ObjectHelper {
    static isNullOrUndefined(input: unknown): boolean {
        return Object.is(null, input) || Object.is(undefined, input)
    }

    static isFalsy(input: unknown): boolean {
        return !input;
    }

    static isEmptyObject(input: object): boolean {
        return TypeGuard.isObject(input) && !Object.keys(input).length
    }

    static isEmptyString(input: string): boolean {
        return TypeGuard.isString(input) && ObjectHelper.isFalsy(input.trim())
    }

    static isEmptyNumber(input: number): boolean {
        return TypeGuard.isNumber(input) && !Number.isFinite(input)
    }

    static isEmpty(input: unknown): boolean {
        return ObjectHelper.isNullOrUndefined(input) || ObjectHelper.isEmptyString(input as string) || ObjectHelper.isEmptyNumber(input as number) || ObjectHelper.isEmptyObject(input as object);
    }
}