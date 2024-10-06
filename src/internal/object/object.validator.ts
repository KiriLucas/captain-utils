import { TypeGuard } from "../common/type-guards";
import { IsEmptyInvalidParametersException } from "./exceptions/is-empty-invalid-parameters.exception"
import { OrderObjectByInvalidParametersException } from "./exceptions/order-object-by-invalid-parameters.exception";


export class ObjectUtilsValidator {
    static validateOrderBy(input: unknown): void {
        if(!Array.isArray(input)) throw new OrderObjectByInvalidParametersException();
    }

    static validateIsEmptyInput(input: unknown): void {
        if (TypeGuard.isBoolean(input) || TypeGuard.isNumber(input) || TypeGuard.isSymbol(input) || TypeGuard.isBigInt(input) || TypeGuard.isFunction(input)) throw new IsEmptyInvalidParametersException(input);
    }
}