import { CaptainUtilsException } from "../../common/base.exception";

export class OrderObjectByInvalidParametersException extends CaptainUtilsException {
    constructor() {
        super(`The received input and/or property is not valid`);
        this.message = 'An invalid type was provided to `ObjectUtilities.orderObjectBy`';
        this.code = '123';
    }
}