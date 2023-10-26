import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { CreateDefinitionRequest } from '../schema';
import { DecoratedDefinition } from '../schema';
import { UpdateDefinitionRequest } from '../schema';
/**
 * DefinitionsApi - object-oriented interface
 * @export
 * @class DefinitionsApi
 * @extends {BaseAPI}
 */
export declare class DefinitionsApi extends BaseAPI {
    /**
     *
     * @summary Clones an existing definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    cloneDefinition(definitionId: number, options?: AxiosRequestConfig): Promise<DecoratedDefinition>;
    /**
     *
     * @summary Delete an existing definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    deleteDefinition(definitionId: number, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Download a definition
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    exportDefinition(definitionId: number, options?: AxiosRequestConfig): Promise<void>;
    /**
     * Retrieves a sinple representation of all enabled definitions by default.  To include disabled definitions set the query parameter `includeDisbaled` to true.  The result will not include the field definitions.
     * @summary Retrieves all definitions
     * @param {boolean} [includeDisabled] If it should include inactive definitions
     * @param {string} [name] Restrict results to definitons with name matching
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    getAllDefinitions(includeDisabled?: boolean, name?: string, options?: AxiosRequestConfig): Promise<DecoratedDefinition[]>;
    /**
     * Retrieves the full details about a specific definition. When setting export to true it will return a clone of the definition.
     * @summary Retrieves a specific definition including its fields.
     * @param {number} definitionId The definition identifier
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the definition and if they are equal, a 304 will be returned.
     * @param {boolean} [_export] When true it will return a clone of the definition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    getDefinition(definitionId: number, ifNoneMatch?: string, _export?: boolean, options?: AxiosRequestConfig): Promise<DecoratedDefinition>;
    /**
     * Retrieves the full details about a definition.
     * @summary Retrieves a specific that match a provided name.
     * @param {string} name The definition name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    getDefinitionByName(name: string, options?: AxiosRequestConfig): Promise<DecoratedDefinition>;
    /**
     *
     * @summary Create a new definition
     * @param {CreateDefinitionRequest} [createDefinitionRequest] The new definition payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    saveDefinition(createDefinitionRequest?: CreateDefinitionRequest, options?: AxiosRequestConfig): Promise<DecoratedDefinition>;
    /**
     *
     * @summary Update an existing definition
     * @param {number} definitionId The definition identifier
     * @param {UpdateDefinitionRequest} [updateDefinitionRequest] The definition object with the updated details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    updateDefinition(definitionId: number, updateDefinitionRequest?: UpdateDefinitionRequest, options?: AxiosRequestConfig): Promise<DecoratedDefinition>;
    /**
     *
     * @summary Change the state of an existing definition
     * @param {number} definitionId The definition identifier
     * @param {string} state The new state
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefinitionsApi
     */
    updateDefinitionState(definitionId: number, state: string, options?: AxiosRequestConfig): Promise<DecoratedDefinition>;
}
