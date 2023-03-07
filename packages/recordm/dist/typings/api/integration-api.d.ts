import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { Instance } from '../schema';
import { IntegrationAddMessage } from '../schema';
import { IntegrationDeleteMessage } from '../schema';
import { IntegrationStats } from '../schema';
import { IntegrationUpdateMessage } from '../schema';
/**
 * IntegrationApi - object-oriented interface
 * @export
 * @class IntegrationApi
 * @extends {BaseAPI}
 */
export declare class IntegrationApi extends BaseAPI {
    /**
     * Deletes the instances that match the condition.
     * @summary Deletes one or more instances
     * @param {IntegrationDeleteMessage} [integrationDeleteMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    _delete(integrationDeleteMessage?: IntegrationDeleteMessage, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IntegrationStats, any>>;
    /**
     * Adds a new instance represented by the passed Object.
     * @summary Create an instance
     * @param {IntegrationAddMessage} [integrationAddMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    add(integrationAddMessage?: IntegrationAddMessage, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Instance, any>>;
    /**
     * Updates the matching instances with the passed updates.
     * @summary Update one or more instances
     * @param {IntegrationUpdateMessage} [integrationUpdateMessage] A JSON doc of the specified format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntegrationApi
     */
    update(integrationUpdateMessage?: IntegrationUpdateMessage, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IntegrationStats, any>>;
}
