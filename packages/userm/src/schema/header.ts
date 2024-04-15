/* eslint-disable */

// May contain unused imports in some cases
import { HeaderElement } from "./header-element"

/**
 * 
 * @export
 * @interface Header
 */
export interface Header {
    /**
     * 
     * @type {Array<HeaderElement>}
     * @memberof Header
     */
    'elements'?: Array<HeaderElement>;
    /**
     * 
     * @type {string}
     * @memberof Header
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Header
     */
    'value'?: string;
}
