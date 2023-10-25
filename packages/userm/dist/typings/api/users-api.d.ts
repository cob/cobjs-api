import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { CreateUserRequest } from '../schema';
import { LoggedInUser } from '../schema';
import { UpdateUserRequest } from '../schema';
import { User } from '../schema';
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export declare class UsersApi extends BaseAPI {
    /**
     *
     * @summary Creates a new user
     * @param {CreateUserRequest} createUserRequest The user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    createUser(createUserRequest: CreateUserRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User, any>>;
    /**
     *
     * @summary Delete an existing user
     * @param {number} id The user identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    deleteUser(id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User, any>>;
    /**
     *
     * @summary Disables an existing user
     * @param {number} id The user identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    disableUser(id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Enables an existing user
     * @param {number} id The user identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    enableUser(id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Retrieves user information about the logged in user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getLoggedInUser(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LoggedInUser, any>>;
    /**
     * Retrieves the full details of a user.
     * @summary Retrieves a user by it\'s id
     * @param {number} id The user identifier
     * @param {string} [ifNoneMatch]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUser(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User, any>>;
    /**
     * Retrieves the full details of a user. Optionally, it can also include information about the users that this user is substituing.
     * @summary Retrieves a user by it\'s username
     * @param {string} username The user username
     * @param {boolean} [substitutedUsers] If it should load the substituted users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUserByUsername(username: string, substitutedUsers?: boolean, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User, any>>;
    /**
     *
     * @summary Update an existing user
     * @param {number} id The user identifier
     * @param {UpdateUserRequest} updateUserRequest The updated user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    updateUser(id: number, updateUserRequest: UpdateUserRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User, any>>;
}
