import { CaptainUtilsException } from "../../common/base.exception";

export class IsEmptyInvalidParametersException extends CaptainUtilsException {
    constructor(receivedInput: unknown) {
        super(`The received input is a ${typeof receivedInput} and cannot be checked for emptiness`);
        this.message = 'An invalid type was provided to `ObjectUtilities.isEmpty`';
        this.code = '123';
    }
}