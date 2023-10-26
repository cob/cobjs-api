import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { Authentication } from '../schema';
import { Credentials } from '../schema';
/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export declare class AuthenticationApi extends BaseAPI {
    /**
     *
     * @summary Authenticate a user
     * @param {Credentials} credentials The user credentials
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    authenticate(credentials: Credentials, options?: AxiosRequestConfig): Promise<Authentication>;
    /**
     *
     * @summary Impersonate another user
     * @param {string} username
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    impersonate(username: string, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Logout user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    logout(options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Reset the user to it\'s original user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    resetOriginalUser(options?: AxiosRequestConfig): Promise<void>;
}
