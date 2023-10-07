/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@cob/cobjs-api-core';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@cob/cobjs-api-core';
import { RequestArgs, BaseAPI, RequiredError } from '@cob/cobjs-api-core';
import { CreateRoleRequest } from '../schema';
import { FieldError } from '../schema';
import { ProductName } from '../schema';
import { Role } from '../schema';
import { UpdateRoleRequest } from '../schema';

/**
 * RolesApi - axios parameter creator
 * @export
 */
const RolesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds permissions to a role
         * @param {number} id The role identifier
         * @param {Array<number>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPermissions: async (id: number, requestBody: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addPermissions', 'id', id)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('addPermissions', 'requestBody', requestBody)
            const localVarPath = `/userm/userm/roles/{id}/permissions`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a new role
         * @param {CreateRoleRequest} createRoleRequest The role information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRole: async (createRoleRequest: CreateRoleRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRoleRequest' is not null or undefined
            assertParamExists('createRole', 'createRoleRequest', createRoleRequest)
            const localVarPath = `/userm/userm/roles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createRoleRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing role
         * @param {number} id The role identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRole: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRole', 'id', id)
            const localVarPath = `/userm/userm/roles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the full details of a role.
         * @summary Retrieves a role by it\'s id
         * @param {number} id The role identifier
         * @param {string} [ifNoneMatch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRole: async (id: number, ifNoneMatch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRole', 'id', id)
            const localVarPath = `/userm/userm/roles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required

            if (ifNoneMatch !== undefined && ifNoneMatch !== null) {
                localVarHeaderParameter['If-None-Match'] = String(ifNoneMatch);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the full details of a role.
         * @summary Retrieves a role by it\'s product and name
         * @param {ProductName} product 
         * @param {string} name The role name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoleByProductAndName: async (product: ProductName, name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'product' is not null or undefined
            assertParamExists('getRoleByProductAndName', 'product', product)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getRoleByProductAndName', 'name', name)
            const localVarPath = `/userm/userm/roles/product/{product}/name/{name}`
                .replace(`{${"product"}}`, encodeURIComponent(String(product)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Removes permissions from a role
         * @param {number} id The role identifier
         * @param {Array<number>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removePermissions: async (id: number, requestBody: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removePermissions', 'id', id)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('removePermissions', 'requestBody', requestBody)
            const localVarPath = `/userm/userm/roles/{id}/permissions`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing role
         * @param {number} id The role identifier
         * @param {UpdateRoleRequest} updateRoleRequest The updated role information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRole: async (id: number, updateRoleRequest: UpdateRoleRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRole', 'id', id)
            // verify required parameter 'updateRoleRequest' is not null or undefined
            assertParamExists('updateRole', 'updateRoleRequest', updateRoleRequest)
            const localVarPath = `/userm/userm/roles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication cobtoken required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoleRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RolesApi - functional programming interface
 * @export
 */
const RolesApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = RolesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Adds permissions to a role
         * @param {number} id The role identifier
         * @param {Array<number>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addPermissions(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addPermissions(id, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Creates a new role
         * @param {CreateRoleRequest} createRoleRequest The role information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRole(createRoleRequest: CreateRoleRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Role>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRole(createRoleRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Delete an existing role
         * @param {number} id The role identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRole(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Role>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRole(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details of a role.
         * @summary Retrieves a role by it\'s id
         * @param {number} id The role identifier
         * @param {string} [ifNoneMatch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRole(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Role>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRole(id, ifNoneMatch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details of a role.
         * @summary Retrieves a role by it\'s product and name
         * @param {ProductName} product 
         * @param {string} name The role name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoleByProductAndName(product: ProductName, name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Role>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoleByProductAndName(product, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Removes permissions from a role
         * @param {number} id The role identifier
         * @param {Array<number>} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removePermissions(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removePermissions(id, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Update an existing role
         * @param {number} id The role identifier
         * @param {UpdateRoleRequest} updateRoleRequest The updated role information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRole(id: number, updateRoleRequest: UpdateRoleRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Role>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRole(id, updateRoleRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * RolesApi - object-oriented interface
 * @export
 * @class RolesApi
 * @extends {BaseAPI}
 */
export class RolesApi extends BaseAPI {
    /**
     * 
     * @summary Adds permissions to a role
     * @param {number} id The role identifier
     * @param {Array<number>} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public addPermissions(id: number, requestBody: Array<number>, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).addPermissions(id, requestBody, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Creates a new role
     * @param {CreateRoleRequest} createRoleRequest The role information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public createRole(createRoleRequest: CreateRoleRequest, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).createRole(createRoleRequest, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Delete an existing role
     * @param {number} id The role identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public deleteRole(id: number, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).deleteRole(id, options).then((request) => request(this.axios));
    }

    /**
     * Retrieves the full details of a role.
     * @summary Retrieves a role by it\'s id
     * @param {number} id The role identifier
     * @param {string} [ifNoneMatch] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public getRole(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).getRole(id, ifNoneMatch, options).then((request) => request(this.axios));
    }

    /**
     * Retrieves the full details of a role.
     * @summary Retrieves a role by it\'s product and name
     * @param {ProductName} product 
     * @param {string} name The role name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public getRoleByProductAndName(product: ProductName, name: string, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).getRoleByProductAndName(product, name, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Removes permissions from a role
     * @param {number} id The role identifier
     * @param {Array<number>} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public removePermissions(id: number, requestBody: Array<number>, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).removePermissions(id, requestBody, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Update an existing role
     * @param {number} id The role identifier
     * @param {UpdateRoleRequest} updateRoleRequest The updated role information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public updateRole(id: number, updateRoleRequest: UpdateRoleRequest, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).updateRole(id, updateRoleRequest, options).then((request) => request(this.axios));
    }
}
