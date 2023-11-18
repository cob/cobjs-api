import { AxiosRequestConfig } from 'axios';
import { SearchResult } from '@cob/cobjs-api-core';
import { BaseAPI } from '@cob/cobjs-api-core';
/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export declare class SearchApi extends BaseAPI {
    /**
     *
     * @summary Downloaad all instances of a specific type (user, groups, roles or permissions) that match the query.
     * @param {string} index
     * @param {string} type
     * @param {string} [q]
     * @param {string} [vc]
     * @param {string} [vcn]
     * @param {string} [sort]
     * @param {boolean} [ascending]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    downloadSearchResults(index: string, type: string, q?: string, vc?: string, vcn?: string, sort?: string, ascending?: boolean, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Search for instancesof a specific type (user, groups, roles or permissions) that match the query.
     * @param {string} index
     * @param {string} type
     * @param {string} [q]
     * @param {number} [from]
     * @param {number} [size]
     * @param {string} [sort]
     * @param {boolean} [ascending]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    search(index: string, type: string, q?: string, from?: number, size?: number, sort?: string, ascending?: boolean, options?: AxiosRequestConfig): Promise<SearchResult>;
}
