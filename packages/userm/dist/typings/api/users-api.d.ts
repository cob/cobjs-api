import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { UpdateUserRequest } from '../model';
import { User } from '../model';
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export declare class UsersApi extends BaseAPI {
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
     * @param {UpdateUserRequest} [updateUserRequest] The updated user information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    updateUser(id: number, updateUserRequest?: UpdateUserRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User, any>>;
}
