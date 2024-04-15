/* eslint-disable */

// May contain unused imports in some cases
import { GroupLinks } from "./group-links"
// May contain unused imports in some cases
import { Role } from "./role"

/**
 * 
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * 
     * @type {number}
     * @memberof Group
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    'product'?: string;
    /**
     * 
     * @type {number}
     * @memberof Group
     */
    'version'?: number;
    /**
     * 
     * @type {GroupLinks}
     * @memberof Group
     */
    '_links'?: GroupLinks;
    /**
     * 
     * @type {Array<Role>}
     * @memberof Group
     */
    'roles'?: Array<Role>;
}
