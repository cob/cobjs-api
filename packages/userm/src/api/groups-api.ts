/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@cob/cobjs-api-core';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@cob/cobjs-api-core';
import { RequestArgs, BaseAPI, RequiredError } from '@cob/cobjs-api-core';
import { CreateGroupRequest } from '../schema';
import { FieldError } from '../schema';
import { Group } from '../schema';
import { UpdateGroupRequest } from '../schema';

/**
 * GroupsApi - axios parameter creator
 * @export
 */
const GroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Adds a role to a group
         * @param {number} id The group identifier
         * @param {Array<number>} requestBody The list of role identifiers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addRoles: async (id: number, requestBody: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addRoles', 'id', id)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('addRoles', 'requestBody', requestBody)
            const localVarPath = `/userm/userm/group/{id}/roles`
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
         * @summary Adds a role to a group
         * @param {number} id The group identifier
         * @param {Array<number>} requestBody The list of user identifiers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUsers: async (id: number, requestBody: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addUsers', 'id', id)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('addUsers', 'requestBody', requestBody)
            const localVarPath = `/userm/userm/group/{id}/users`
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
         * @summary Creates a new group
         * @param {CreateGroupRequest} createGroupRequest The group information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGroup: async (createGroupRequest: CreateGroupRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createGroupRequest' is not null or undefined
            assertParamExists('createGroup', 'createGroupRequest', createGroupRequest)
            const localVarPath = `/userm/userm/group`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing user
         * @param {number} id The group identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroup: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteGroup', 'id', id)
            const localVarPath = `/userm/userm/group/{id}`
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
         * Retrieves the full details of a group.
         * @summary Retrieves a group by it\'s id
         * @param {number} id The group identifier
         * @param {string} [ifNoneMatch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroup: async (id: number, ifNoneMatch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getGroup', 'id', id)
            const localVarPath = `/userm/userm/group/{id}`
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
         * Retrieves the full details of a group.
         * @summary Retrieves a group by it\'s name
         * @param {string} name The group name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupByName: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getGroupByName', 'name', name)
            const localVarPath = `/userm/userm/group/name/{name}`
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
         * @summary Removes a role from a group
         * @param {number} id The group identifier
         * @param {Array<number>} requestBody The list of role identifiers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeRoles: async (id: number, requestBody: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeRoles', 'id', id)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('removeRoles', 'requestBody', requestBody)
            const localVarPath = `/userm/userm/group/{id}/roles`
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
         * @summary Removes a user from a group
         * @param {number} id The group identifier
         * @param {Array<number>} requestBody The list of user identifiers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeUsers: async (id: number, requestBody: Array<number>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeUsers', 'id', id)
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('removeUsers', 'requestBody', requestBody)
            const localVarPath = `/userm/userm/group/{id}/users`
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
         * @summary Update an existing group
         * @param {number} id The group identifier
         * @param {UpdateGroupRequest} updateGroupRequest The updated group information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroup: async (id: number, updateGroupRequest: UpdateGroupRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateGroup', 'id', id)
            // verify required parameter 'updateGroupRequest' is not null or undefined
            assertParamExists('updateGroup', 'updateGroupRequest', updateGroupRequest)
            const localVarPath = `/userm/userm/group/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateGroupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsApi - functional programming interface
 * @export
 */
const GroupsApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = GroupsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Adds a role to a group
         * @param {number} id The group identifier
         * @param {Array<number>} requestBody The list of role identifiers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addRoles(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRoles(id, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Adds a role to a group
         * @param {number} id The group identifier
         * @param {Array<number>} requestBody The list of user identifiers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addUsers(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addUsers(id, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Creates a new group
         * @param {CreateGroupRequest} createGroupRequest The group information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGroup(createGroupRequest: CreateGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createGroup(createGroupRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Delete an existing user
         * @param {number} id The group identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroup(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteGroup(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details of a group.
         * @summary Retrieves a group by it\'s id
         * @param {number} id The group identifier
         * @param {string} [ifNoneMatch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroup(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroup(id, ifNoneMatch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details of a group.
         * @summary Retrieves a group by it\'s name
         * @param {string} name The group name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupByName(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupByName(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Removes a role from a group
         * @param {number} id The group identifier
         * @param {Array<number>} requestBody The list of role identifiers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeRoles(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeRoles(id, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Removes a user from a group
         * @param {number} id The group identifier
         * @param {Array<number>} requestBody The list of user identifiers
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeUsers(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeUsers(id, requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Update an existing group
         * @param {number} id The group identifier
         * @param {UpdateGroupRequest} updateGroupRequest The updated group information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGroup(id: number, updateGroupRequest: UpdateGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<Group>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGroup(id, updateGroupRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * GroupsApi - object-oriented interface
 * @export
 * @class GroupsApi
 * @extends {BaseAPI}
 */
export class GroupsApi extends BaseAPI {
    /**
     * 
     * @summary Adds a role to a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of role identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public addRoles(id: number, requestBody: Array<number>, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).addRoles(id, requestBody, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Adds a role to a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of user identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public addUsers(id: number, requestBody: Array<number>, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).addUsers(id, requestBody, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Creates a new group
     * @param {CreateGroupRequest} createGroupRequest The group information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public createGroup(createGroupRequest: CreateGroupRequest, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).createGroup(createGroupRequest, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Delete an existing user
     * @param {number} id The group identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public deleteGroup(id: number, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).deleteGroup(id, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Retrieves the full details of a group.
     * @summary Retrieves a group by it\'s id
     * @param {number} id The group identifier
     * @param {string} [ifNoneMatch] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public getGroup(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).getGroup(id, ifNoneMatch, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Retrieves the full details of a group.
     * @summary Retrieves a group by it\'s name
     * @param {string} name The group name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public getGroupByName(name: string, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).getGroupByName(name, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Removes a role from a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of role identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public removeRoles(id: number, requestBody: Array<number>, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).removeRoles(id, requestBody, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Removes a user from a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of user identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public removeUsers(id: number, requestBody: Array<number>, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).removeUsers(id, requestBody, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Update an existing group
     * @param {number} id The group identifier
     * @param {UpdateGroupRequest} updateGroupRequest The updated group information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    public updateGroup(id: number, updateGroupRequest: UpdateGroupRequest, options?: AxiosRequestConfig) {
        return GroupsApiFp(this.configuration).updateGroup(id, updateGroupRequest, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }
}
