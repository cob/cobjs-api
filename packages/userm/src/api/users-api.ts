/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration, SearchResult } from '@cob/cobjs-api-core';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@cob/cobjs-api-core';
import { RequestArgs, BaseAPI, RequiredError } from '@cob/cobjs-api-core';
import { CreateUserRequest } from '../schema';
import { FieldError } from '../schema';
import { LoggedInUser } from '../schema';
import { UpdateUserRequest } from '../schema';
import { User } from '../schema';

/**
 * UsersApi - axios parameter creator
 * @export
 */
const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a new user
         * @param {CreateUserRequest} createUserRequest The user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (createUserRequest: CreateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserRequest' is not null or undefined
            assertParamExists('createUser', 'createUserRequest', createUserRequest)
            const localVarPath = `/userm/userm/user`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing user
         * @param {number} id The user identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteUser', 'id', id)
            const localVarPath = `/userm/userm/user/{id}`
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
         * 
         * @summary Disables an existing user
         * @param {number} id The user identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disableUser: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('disableUser', 'id', id)
            const localVarPath = `/userm/userm/user/{id}/disable`
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
         * @summary Enables an existing user
         * @param {number} id The user identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableUser: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('enableUser', 'id', id)
            const localVarPath = `/userm/userm/user/{id}/enable`
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
         * @summary Retrieves user information about the logged in user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/userm/userm/user/loggedin`;
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
         * Retrieves the full details of a user. 
         * @summary Retrieves a user by it\'s id
         * @param {number} id The user identifier
         * @param {string} [ifNoneMatch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (id: number, ifNoneMatch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUser', 'id', id)
            const localVarPath = `/userm/userm/user/{id}`
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
         * Retrieves the full details of a user. Optionally, it can also include information about the users that this user is substituing.
         * @summary Retrieves a user by it\'s username
         * @param {string} username The user username
         * @param {boolean} [substitutedUsers] If it should load the substituted users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByUsername: async (username: string, substitutedUsers?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('getUserByUsername', 'username', username)
            const localVarPath = `/userm/userm/user/username/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
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

            if (substitutedUsers !== undefined) {
                localVarQueryParameter['substitutedUsers'] = substitutedUsers;
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
         * 
         * @summary Update an existing user
         * @param {number} id The user identifier
         * @param {UpdateUserRequest} updateUserRequest The updated user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (id: number, updateUserRequest: UpdateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateUser', 'id', id)
            // verify required parameter 'updateUserRequest' is not null or undefined
            assertParamExists('updateUser', 'updateUserRequest', updateUserRequest)
            const localVarPath = `/userm/userm/user/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
const UsersApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates a new user
         * @param {CreateUserRequest} createUserRequest The user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(createUserRequest: CreateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(createUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Delete an existing user
         * @param {number} id The user identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Disables an existing user
         * @param {number} id The user identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async disableUser(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.disableUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Enables an existing user
         * @param {number} id The user identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enableUser(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Retrieves user information about the logged in user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoggedInUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<LoggedInUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoggedInUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details of a user. 
         * @summary Retrieves a user by it\'s id
         * @param {number} id The user identifier
         * @param {string} [ifNoneMatch] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(id, ifNoneMatch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Retrieves the full details of a user. Optionally, it can also include information about the users that this user is substituing.
         * @summary Retrieves a user by it\'s username
         * @param {string} username The user username
         * @param {boolean} [substitutedUsers] If it should load the substituted users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByUsername(username: string, substitutedUsers?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByUsername(username, substitutedUsers, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * 
         * @summary Update an existing user
         * @param {number} id The user identifier
         * @param {UpdateUserRequest} updateUserRequest The updated user information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(id: number, updateUserRequest: UpdateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(id, updateUserRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary Creates a new user
     * @param {CreateUserRequest} createUserRequest The user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public createUser(createUserRequest: CreateUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).createUser(createUserRequest, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Delete an existing user
     * @param {number} id The user identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteUser(id: number, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).deleteUser(id, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Disables an existing user
     * @param {number} id The user identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public disableUser(id: number, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).disableUser(id, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Enables an existing user
     * @param {number} id The user identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public enableUser(id: number, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).enableUser(id, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Retrieves user information about the logged in user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getLoggedInUser(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getLoggedInUser(options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Retrieves the full details of a user. 
     * @summary Retrieves a user by it\'s id
     * @param {number} id The user identifier
     * @param {string} [ifNoneMatch] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUser(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUser(id, ifNoneMatch, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Retrieves the full details of a user. Optionally, it can also include information about the users that this user is substituing.
     * @summary Retrieves a user by it\'s username
     * @param {string} username The user username
     * @param {boolean} [substitutedUsers] If it should load the substituted users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUserByUsername(username: string, substitutedUsers?: boolean, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUserByUsername(username, substitutedUsers, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * 
     * @summary Update an existing user
     * @param {number} id The user identifier
     * @param {UpdateUserRequest} updateUserRequest The updated user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public updateUser(id: number, updateUserRequest: UpdateUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).updateUser(id, updateUserRequest, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }
}
