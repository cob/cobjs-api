import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export declare class SearchApi extends BaseAPI {
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
    searchInDefinition(defId?: number, def?: string, q?: string, from?: number, size?: number, sort?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
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
    searchInDomain(domainId?: number, domain?: string, q?: string, from?: number, size?: number, sort?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
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
    searchStructuredInDomain(domainId?: number, domain?: string, body?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
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
    streamSearchInDefinition(defId?: number, def?: string, q?: string, sort?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
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
    streamSearchInDomain(domainId?: number, domain?: string, q?: string, sort?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
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
    streamStructuredSearchInDefinition(defId?: number, def?: string, body?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
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
    streamStructuredSearchInDomain(domainId?: number, domain?: string, body?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
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
    structuredSearchInDefinition(defId?: number, def?: string, typedKeys?: boolean, body?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
