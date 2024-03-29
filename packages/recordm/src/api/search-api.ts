/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '@cob/cobjs-api-core';
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
         * The preferred endpoint for searches. Search instances of a definition specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
         * @summary Search Definition
         * @param {number} [defId] The definition Id
         * @param {string} [def] The definition name
         * @param {string} [q] The query
         * @param {number} [from] the first result to return
         * @param {number} [size] the number of results to return
         * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchInDefinition: async (defId?: number, def?: string, q?: string, from?: number, size?: number, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/definitions/search`;
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

            if (defId !== undefined) {
                localVarQueryParameter['defId'] = defId;
            }

            if (def !== undefined) {
                localVarQueryParameter['def'] = def;
            }

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search instances of all definitions of a Domain, specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
         * @summary Search Domain
         * @param {number} [domainId] The domain Id
         * @param {string} [domain] The domain name
         * @param {string} [q] The query
         * @param {number} [from] the first result to return
         * @param {number} [size] the number of results to return
         * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchInDomain: async (domainId?: number, domain?: string, q?: string, from?: number, size?: number, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/domains/search`;
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

            if (domainId !== undefined) {
                localVarQueryParameter['domainId'] = domainId;
            }

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search instances of all definitions of a Domain, specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
         * @summary Structured Search of Domain
         * @param {number} [domainId] The domain Id
         * @param {string} [domain] The domain name
         * @param {string} [body] The JSON of the ES query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchStructuredInDomain: async (domainId?: number, domain?: string, body?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/domains/search`;
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

            if (domainId !== undefined) {
                localVarQueryParameter['domainId'] = domainId;
            }

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
         * @summary Stream a Definition Search
         * @param {number} [defId] The definition Id
         * @param {string} [def] The definition name
         * @param {string} [q] The query
         * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSearchInDefinition: async (defId?: number, def?: string, q?: string, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/definitions/search/stream`;
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

            if (defId !== undefined) {
                localVarQueryParameter['defId'] = defId;
            }

            if (def !== undefined) {
                localVarQueryParameter['def'] = def;
            }

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
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
         * Stream through all the results of a Domain search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
         * @summary Stream a Domain Search
         * @param {number} [domainId] The domain Id
         * @param {string} [domain] The domain name
         * @param {string} [q] The query
         * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamSearchInDomain: async (domainId?: number, domain?: string, q?: string, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/domains/search/stream`;
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

            if (domainId !== undefined) {
                localVarQueryParameter['domainId'] = domainId;
            }

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
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
         * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
         * @summary Stream a Definition Search
         * @param {number} [defId] The definition Id
         * @param {string} [def] The definition name
         * @param {string} [body] The JSON of the ES query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamStructuredSearchInDefinition: async (defId?: number, def?: string, body?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/definitions/search/stream`;
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

            if (defId !== undefined) {
                localVarQueryParameter['defId'] = defId;
            }

            if (def !== undefined) {
                localVarQueryParameter['def'] = def;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
         * @summary Stream a Definition Search
         * @param {number} [domainId] The domain Id
         * @param {string} [domain] The domain name
         * @param {string} [body] The JSON of the ES query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        streamStructuredSearchInDomain: async (domainId?: number, domain?: string, body?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/domains/search/stream`;
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

            if (domainId !== undefined) {
                localVarQueryParameter['domainId'] = domainId;
            }

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search the definition specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
         * @summary Structured Search of Definition
         * @param {number} [defId] The definition Id
         * @param {string} [def] The definition name
         * @param {boolean} [typedKeys] When asking for aggregations, should they be prefixed with the aggregation type? The same behaviour as specified in [ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/search-aggregations.html#return-agg-type)
         * @param {string} [body] The JSON of the ES query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        structuredSearchInDefinition: async (defId?: number, def?: string, typedKeys?: boolean, body?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recordm/recordm/definitions/search`;
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

            if (defId !== undefined) {
                localVarQueryParameter['defId'] = defId;
            }

            if (def !== undefined) {
                localVarQueryParameter['def'] = def;
            }

            if (typedKeys !== undefined) {
                localVarQueryParameter['typed_keys'] = typedKeys;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

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
         * The preferred endpoint for searches. Search instances of a definition specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
         * @summary Search Definition
         * @param {number} [defId] The definition Id
         * @param {string} [def] The definition name
         * @param {string} [q] The query
         * @param {number} [from] the first result to return
         * @param {number} [size] the number of results to return
         * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchInDefinition(defId?: number, def?: string, q?: string, from?: number, size?: number, sort?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchInDefinition(defId, def, q, from, size, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Search instances of all definitions of a Domain, specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
         * @summary Search Domain
         * @param {number} [domainId] The domain Id
         * @param {string} [domain] The domain name
         * @param {string} [q] The query
         * @param {number} [from] the first result to return
         * @param {number} [size] the number of results to return
         * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchInDomain(domainId?: number, domain?: string, q?: string, from?: number, size?: number, sort?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchInDomain(domainId, domain, q, from, size, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Search instances of all definitions of a Domain, specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
         * @summary Structured Search of Domain
         * @param {number} [domainId] The domain Id
         * @param {string} [domain] The domain name
         * @param {string} [body] The JSON of the ES query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchStructuredInDomain(domainId?: number, domain?: string, body?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchStructuredInDomain(domainId, domain, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
         * @summary Stream a Definition Search
         * @param {number} [defId] The definition Id
         * @param {string} [def] The definition name
         * @param {string} [q] The query
         * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSearchInDefinition(defId?: number, def?: string, q?: string, sort?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamSearchInDefinition(defId, def, q, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Stream through all the results of a Domain search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
         * @summary Stream a Domain Search
         * @param {number} [domainId] The domain Id
         * @param {string} [domain] The domain name
         * @param {string} [q] The query
         * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamSearchInDomain(domainId?: number, domain?: string, q?: string, sort?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamSearchInDomain(domainId, domain, q, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
         * @summary Stream a Definition Search
         * @param {number} [defId] The definition Id
         * @param {string} [def] The definition name
         * @param {string} [body] The JSON of the ES query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamStructuredSearchInDefinition(defId?: number, def?: string, body?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamStructuredSearchInDefinition(defId, def, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
         * @summary Stream a Definition Search
         * @param {number} [domainId] The domain Id
         * @param {string} [domain] The domain name
         * @param {string} [body] The JSON of the ES query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async streamStructuredSearchInDomain(domainId?: number, domain?: string, body?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.streamStructuredSearchInDomain(domainId, domain, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, configuration);
        },
        /**
         * Search the definition specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
         * @summary Structured Search of Definition
         * @param {number} [defId] The definition Id
         * @param {string} [def] The definition name
         * @param {boolean} [typedKeys] When asking for aggregations, should they be prefixed with the aggregation type? The same behaviour as specified in [ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/search-aggregations.html#return-agg-type)
         * @param {string} [body] The JSON of the ES query.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async structuredSearchInDefinition(defId?: number, def?: string, typedKeys?: boolean, body?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.structuredSearchInDefinition(defId, def, typedKeys, body, options);
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
     * The preferred endpoint for searches. Search instances of a definition specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
     * @summary Search Definition
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [q] The query
     * @param {number} [from] the first result to return
     * @param {number} [size] the number of results to return
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public searchInDefinition(defId?: number, def?: string, q?: string, from?: number, size?: number, sort?: string, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).searchInDefinition(defId, def, q, from, size, sort, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Search instances of all definitions of a Domain, specified either by id or by name, using ES query_string. Supports multiple sorts.See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl-query-string-query.html#query-string-syntax) for syntax details.
     * @summary Search Domain
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [q] The query
     * @param {number} [from] the first result to return
     * @param {number} [size] the number of results to return
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public searchInDomain(domainId?: number, domain?: string, q?: string, from?: number, size?: number, sort?: string, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).searchInDomain(domainId, domain, q, from, size, sort, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Search instances of all definitions of a Domain, specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
     * @summary Structured Search of Domain
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public searchStructuredInDomain(domainId?: number, domain?: string, body?: string, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).searchStructuredInDomain(domainId, domain, body, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
     * @summary Stream a Definition Search
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [q] The query
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public streamSearchInDefinition(defId?: number, def?: string, q?: string, sort?: string, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).streamSearchInDefinition(defId, def, q, sort, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Stream through all the results of a Domain search. Useful when needing to process more than the 10.000 results available through the normal search. The arguments are the same as on a normal search, excluding `size` and `from`, that are not needed.
     * @summary Stream a Domain Search
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [q] The query
     * @param {string} [sort] A comma-separated list of &lt;field&gt;:&lt;direction&gt; pairs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public streamSearchInDomain(domainId?: number, domain?: string, q?: string, sort?: string, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).streamSearchInDomain(domainId, domain, q, sort, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
     * @summary Stream a Definition Search
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public streamStructuredSearchInDefinition(defId?: number, def?: string, body?: string, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).streamStructuredSearchInDefinition(defId, def, body, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Stream through all the results of a Definition search. Useful when needing to process more than the 10.000 results available through the normal search. Accepts a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.Does <strong>NOT</strong> accept aggregations, use the normal search endpoint for them.
     * @summary Stream a Definition Search
     * @param {number} [domainId] The domain Id
     * @param {string} [domain] The domain name
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public streamStructuredSearchInDomain(domainId?: number, domain?: string, body?: string, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).streamStructuredSearchInDomain(domainId, domain, body, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }

    /**
     * Search the definition specified either by id or name, using a structured ES search request. See [the ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/query-dsl.html) for details on query syntax.
     * @summary Structured Search of Definition
     * @param {number} [defId] The definition Id
     * @param {string} [def] The definition name
     * @param {boolean} [typedKeys] When asking for aggregations, should they be prefixed with the aggregation type? The same behaviour as specified in [ES docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/search-aggregations.html#return-agg-type)
     * @param {string} [body] The JSON of the ES query.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    public structuredSearchInDefinition(defId?: number, def?: string, typedKeys?: boolean, body?: string, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).structuredSearchInDefinition(defId, def, typedKeys, body, options)
            .then((request) => request(this.axios))
            .then((axios) => axios.data);
    }
}
