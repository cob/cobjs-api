import { DefinitionLinks } from "./definition-links";
import { FieldDefinition } from "./field-definition";
/**
 *
 * @export
 * @interface DecoratedDefinition
 */
export interface DecoratedDefinition {
    /**
     *
     * @type {number}
     * @memberof DecoratedDefinition
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof DecoratedDefinition
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof DecoratedDefinition
     */
    'description'?: string;
    /**
     *
     * @type {boolean}
     * @memberof DecoratedDefinition
     */
    'duplicable'?: boolean;
    /**
     *
     * @type {string}
     * @memberof DecoratedDefinition
     */
    'state': DecoratedDefinitionStateEnum;
    /**
     *
     * @type {Array<FieldDefinition>}
     * @memberof DecoratedDefinition
     */
    'fieldDefinitions': Array<FieldDefinition>;
    /**
     *
     * @type {number}
     * @memberof DecoratedDefinition
     */
    'version': number;
    /**
     *
     * @type {DefinitionLinks}
     * @memberof DecoratedDefinition
     */
    '_links': DefinitionLinks;
}
export declare const DecoratedDefinitionStateEnum: {
    readonly ENABLED: "enabled";
    readonly DISABLED: "disabled";
    readonly DELETE_IN_PROGRESS: "deleteInProgress";
};
export declare type DecoratedDefinitionStateEnum = typeof DecoratedDefinitionStateEnum[keyof typeof DecoratedDefinitionStateEnum];
