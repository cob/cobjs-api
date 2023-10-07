import { FieldDefinition } from "./field-definition";
/**
 *
 * @export
 * @interface UpdateDefinitionRequest
 */
export interface UpdateDefinitionRequest {
    /**
     *
     * @type {string}
     * @memberof UpdateDefinitionRequest
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof UpdateDefinitionRequest
     */
    'description'?: string;
    /**
     *
     * @type {boolean}
     * @memberof UpdateDefinitionRequest
     */
    'duplicable'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UpdateDefinitionRequest
     */
    'state'?: UpdateDefinitionRequestStateEnum;
    /**
     *
     * @type {Array<FieldDefinition>}
     * @memberof UpdateDefinitionRequest
     */
    'fieldDefinitions'?: Array<FieldDefinition>;
    /**
     *
     * @type {number}
     * @memberof UpdateDefinitionRequest
     */
    'version': number;
}
export declare const UpdateDefinitionRequestStateEnum: {
    readonly ENABLED: "enabled";
    readonly DISABLED: "disabled";
    readonly DELETE_IN_PROGRESS: "deleteInProgress";
};
export type UpdateDefinitionRequestStateEnum = typeof UpdateDefinitionRequestStateEnum[keyof typeof UpdateDefinitionRequestStateEnum];
