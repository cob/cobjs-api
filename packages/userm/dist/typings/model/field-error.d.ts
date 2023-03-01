/**
 *
 * @export
 * @interface FieldError
 */
export interface FieldError {
    /**
     *
     * @type {string}
     * @memberof FieldError
     */
    'errorType'?: FieldErrorErrorTypeEnum;
    /**
     *
     * @type {string}
     * @memberof FieldError
     */
    'fieldName'?: string;
    /**
     *
     * @type {string}
     * @memberof FieldError
     */
    'message'?: string;
}
export declare const FieldErrorErrorTypeEnum: {
    readonly MANDATORY: "MANDATORY";
    readonly NON_UNIQUE: "NON_UNIQUE";
    readonly INVALID_FORMAT: "INVALID_FORMAT";
    readonly SHORT_DATA: "SHORT_DATA";
    readonly INVALID_PRODUCT: "INVALID_PRODUCT";
    readonly DATA_TOO_LONG: "DATA_TOO_LONG";
    readonly USER_NOT_FOUND: "USER_NOT_FOUND";
    readonly INVALID_SUBSTITUTE_USER: "INVALID_SUBSTITUTE_USER";
    readonly NOT_ALLOWED: "NOT_ALLOWED";
};
export declare type FieldErrorErrorTypeEnum = typeof FieldErrorErrorTypeEnum[keyof typeof FieldErrorErrorTypeEnum];
