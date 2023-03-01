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
    'field'?: string;
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
    'error'?: string;
}
export declare const FieldErrorErrorTypeEnum: {
    readonly MANDATORY: "MANDATORY";
    readonly INVALID_FORMAT: "INVALID_FORMAT";
    readonly FIELD_TO_LONG: "FIELD_TO_LONG";
    readonly DUPLICATE_DOMAIN_NAME: "DUPLICATE_DOMAIN_NAME";
    readonly DOMAIN_NAME_NOT_ALLOWED: "DOMAIN_NAME_NOT_ALLOWED";
    readonly DUPLICATE_DEFINITION_NAME: "DUPLICATE_DEFINITION_NAME";
    readonly INVALID_FIELD_DEFINITION_NAME: "INVALID_FIELD_DEFINITION_NAME";
    readonly INVALID_FIELD_DEFINITION_DESCRIPTION: "INVALID_FIELD_DEFINITION_DESCRIPTION";
    readonly NO_DEFINITION_FOUND: "NO_DEFINITION_FOUND";
    readonly DEFINITION_NOT_ENABLED: "DEFINITION_NOT_ENABLED";
    readonly NOT_A_NUMBER: "NOT_A_NUMBER";
    readonly NOT_A_DATE: "NOT_A_DATE";
    readonly NOT_AUTHORIZED_TO_EDIT_FIELD: "NOT_AUTHORIZED_TO_EDIT_FIELD";
    readonly VALUE_NOT_SUPPORTED: "VALUE_NOT_SUPPORTED";
    readonly INSTANCE_REFERENCED: "INSTANCE_REFERENCED";
    readonly EXT_REF_INVALID_STATE: "EXT_REF_INVALID_STATE";
    readonly NOT_DUPLICABLE_FIELD: "NOT_DUPLICABLE_FIELD";
    readonly WORKM_ERROR: "WORKM_ERROR";
    readonly NOT_VALID_TASKS_FORMAT: "NOT_VALID_TASKS_FORMAT";
    readonly NOT_VALID_TASK: "NOT_VALID_TASK";
};
export declare type FieldErrorErrorTypeEnum = typeof FieldErrorErrorTypeEnum[keyof typeof FieldErrorErrorTypeEnum];
