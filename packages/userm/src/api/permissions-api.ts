/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@cob/cobjs-api-core';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@cob/cobjs-api-core';
import { RequestArgs, BaseAPI, RequiredError } from '@cob/cobjs-api-core';
import { CreatePermissionRequest } from '../schema';
import { FieldError } from '../schema';
import { Permission } from '../schema';
import { ProductName } from '../schema';
import { UpdatePermissionRequest } from '../schema';

/**
 * PermissionsApi - axios parameter creator
 * @export
 */
const PermissionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a new permission
         * @param {CreatePermissionRequest} createPermissionRequest The permission information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPermission: async (createPermissionRequest: CreatePermissionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createPermissionRequest' is not null or undefined
            assertParamExists('createPermission', 'createPermissionRequest', createPermissionRequest)
            const localVarPath = `/userm/userm/permissions`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createPermissionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing permission
         * @param {number} id The permission identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePermission: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deletePermission', 'id', id)
            const localVarPath = `/userm/userm/permissions/{id}`
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
         * Retrieves the full details of a permission.
         * @summary Retrieves a permission by it\'s id
         * @param {number} id The permission identifier
         * @param {string} [ifNoneMatch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPermission: async (id: number, ifNoneMatch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPermission', 'id', id)
            const localVarPath = `/userm/userm/permissions/{id}`
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
         * Retrieves the full details of a permission.
         * @summary Retrieves a permission by it\'s product and name
         * @param {ProductName} product 
         * @param {string} name The permission name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPermissionByProductAndName: async (product: ProductName, name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'product' is not null or undefined
            assertParamExists('getPermissionByProductAndName', 'product', product)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getPermissionByProductAndName', 'name', name)
            const localVarPath = `/userm/userm/permissions/product/{product}/name/{name}`
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
         * @summary Update an existing permission
         * @param {number} id The permission identifier
         * @param {UpdatePermissionRequest} updatePermissionRequest The updated permission information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePermission: async (id: number, updatePermissionRequest: UpdatePermissionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updatePermission', 'id', id)
            // verify required parameter 'updatePermissionRequest' is not null or undefined
            assertParamExists('updatePermission', 'updatePermissionRequest', updatePermissionRequest)
            const localVarPath = `/userm/userm/permissions/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updatePermissionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PermissionsApi - functional programming interface
 * @export
 */
const PermissionsApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = PermissionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates a new permission
         * @param {CreatePermissionRequest} createPermissionRequest The permission information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPermission(createPermissionRequest: CreatePermissionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Permission>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPermission(createPermissionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Delete an existing permission
         * @param {number} id The permission identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePermission(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Permission>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletePermission(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details of a permission.
         * @summary Retrieves a permission by it\'s id
         * @param {number} id The permission identifier
         * @param {string} [ifNoneMatch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPermission(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Permission>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPermission(id, ifNoneMatch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details of a permission.
         * @summary Retrieves a permission by it\'s product and name
         * @param {ProductName} product 
         * @param {string} name The permission name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPermissionByProductAndName(product: ProductName, name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Permission>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPermissionByProductAndName(product, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Update an existing permission
         * @param {number} id The permission identifier
         * @param {UpdatePermissionRequest} updatePermissionRequest The updated permission information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePermission(id: number, updatePermissionRequest: UpdatePermissionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Permission>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePermission(id, updatePermissionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * PermissionsApi - object-oriented interface
 * @export
 * @class PermissionsApi
 * @extends {BaseAPI}
 */
export class PermissionsApi extends BaseAPI {
    /**
     * 
     * @summary Creates a new permission
     * @param {CreatePermissionRequest} createPermissionRequest The permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public createPermission(createPermissionRequest: CreatePermissionRequest, options?: AxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).createPermission(createPermissionRequest, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Delete an existing permission
     * @param {number} id The permission identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public deletePermission(id: number, options?: AxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).deletePermission(id, options).then((request) => request(this.axios));
    }

    /**
     * Retrieves the full details of a permission.
     * @summary Retrieves a permission by it\'s id
     * @param {number} id The permission identifier
     * @param {string} [ifNoneMatch] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public getPermission(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).getPermission(id, ifNoneMatch, options).then((request) => request(this.axios));
    }

    /**
     * Retrieves the full details of a permission.
     * @summary Retrieves a permission by it\'s product and name
     * @param {ProductName} product 
     * @param {string} name The permission name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public getPermissionByProductAndName(product: ProductName, name: string, options?: AxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).getPermissionByProductAndName(product, name, options).then((request) => request(this.axios));
    }

    /**
     * 
     * @summary Update an existing permission
     * @param {number} id The permission identifier
     * @param {UpdatePermissionRequest} updatePermissionRequest The updated permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    public updatePermission(id: number, updatePermissionRequest: UpdatePermissionRequest, options?: AxiosRequestConfig) {
        return PermissionsApiFp(this.configuration).updatePermission(id, updatePermissionRequest, options).then((request) => request(this.axios));
    }
}
