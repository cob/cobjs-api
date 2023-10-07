/* eslint-disable */

// May contain unused imports in some cases
import { RoleLinks } from "./role-links"

/**
 * 
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {number}
     * @memberof Role
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    'product'?: string;
    /**
     * 
     * @type {number}
     * @memberof Role
     */
    'version'?: number;
    /**
     * 
     * @type {RoleLinks}
     * @memberof Role
     */
    '_links'?: RoleLinks;
}
