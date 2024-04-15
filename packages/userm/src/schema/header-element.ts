/* eslint-disable */

// May contain unused imports in some cases
import { NameValuePair } from "./name-value-pair"

/**
 * 
 * @export
 * @interface HeaderElement
 */
export interface HeaderElement {
    /**
     * 
     * @type {string}
     * @memberof HeaderElement
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof HeaderElement
     */
    'value'?: string;
    /**
     * 
     * @type {number}
     * @memberof HeaderElement
     */
    'parameterCount'?: number;
    /**
     * 
     * @type {Array<NameValuePair>}
     * @memberof HeaderElement
     */
    'parameters'?: Array<NameValuePair>;
}
