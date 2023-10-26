import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
/**
 * ActionsApi - object-oriented interface
 * @export
 * @class ActionsApi
 * @extends {BaseAPI}
 */
export declare class ActionsApi extends BaseAPI {
    /**
     * Can be used with:    - JSON, the simplest way when calling from other code (or even cURL)   - <code>application/x-www-form-urlencoded</code>, directly from an HTML form.
     * @summary Execute a blocking action. No other action will be executable until this one finishes.
     * @param {string} name The name of the action
     * @param {{ [key: string]: any; }} [requestBody] The new definition payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApi
     */
    executeBlockingAction(name: string, requestBody?: {
        [key: string]: any;
    }, options?: AxiosRequestConfig): Promise<string>;
    /**
     * Can be used with:    - JSON, the simplest way when calling from other code (or even cURL)   - <code>application/x-www-form-urlencoded</code>, directly from an HTML form.
     * @summary Execute an action that will not block the execution of other actions
     * @param {string} name The name of the action
     * @param {{ [key: string]: any; }} [requestBody] The new definition payload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApi
     */
    executeConcurrentAction(name: string, requestBody?: {
        [key: string]: any;
    }, options?: AxiosRequestConfig): Promise<string>;
}
