/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration, SearchResult } from '@cob/cobjs-api-core';
// Some imports not used depending on template conditions
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@cob/cobjs-api-core';
import { RequestArgs, BaseAPI, RequiredError } from '@cob/cobjs-api-core';

/**
 * SearchApi - axios parameter creator
 * @export
 */
const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
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
         */
        downloadSearchResults: async (index: string, type: string, q?: string, vc?: string, vcn?: string, sort?: string, ascending?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'index' is not null or undefined
            assertParamExists('downloadSearchResults', 'index', index)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('downloadSearchResults', 'type', type)
            const localVarPath = `/userm/userm/search/{index}/{type}/download`
                .replace(`{${"index"}}`, encodeURIComponent(String(index)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (vc !== undefined) {
                localVarQueryParameter['vc'] = vc;
            }

            if (vcn !== undefined) {
                localVarQueryParameter['vcn'] = vcn;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (ascending !== undefined) {
                localVarQueryParameter['ascending'] = ascending;
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
         */
        search: async (index: string, type: string, q?: string, from?: number, size?: number, sort?: string, ascending?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'index' is not null or undefined
            assertParamExists('search', 'index', index)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('search', 'type', type)
            const localVarPath = `/userm/userm/search/{index}/{type}`
                .replace(`{${"index"}}`, encodeURIComponent(String(index)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (ascending !== undefined) {
                localVarQueryParameter['ascending'] = ascending;
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SearchApi - functional programming interface
 * @export
 */
const SearchApiFp = function(configuration: Configuration) {
    const localVarAxiosParamCreator = SearchApiAxiosParamCreator(configuration)
    return {
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
         */
        async downloadSearchResults(index: string, type: string, q?: string, vc?: string, vcn?: string, sort?: string, ascending?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadSearchResults(index, type, q, vc, vcn, sort, ascending, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
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
         */
        async search(index: string, type: string, q?: string, from?: number, size?: number, sort?: string, ascending?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<SearchResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.search(index, type, q, from, size, sort, ascending, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
    }
};

/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export class SearchApi extends BaseAPI {
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
    public downloadSearchResults(index: string, type: string, q?: string, vc?: string, vcn?: string, sort?: string, ascending?: boolean, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).downloadSearchResults(index, type, q, vc, vcn, sort, ascending, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

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
    public search(index: string, type: string, q?: string, from?: number, size?: number, sort?: string, ascending?: boolean, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).search(index, type, q, from, size, sort, ascending, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }
}
