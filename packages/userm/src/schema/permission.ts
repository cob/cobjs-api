/* eslint-disable */

// May contain unused imports in some cases
import { PermissionLinks } from "./permission-links"

/**
 * 
 * @export
 * @interface Permission
 */
export interface Permission {
    /**
     * 
     * @type {number}
     * @memberof Permission
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    'product': string;
    /**
     * 
     * @type {number}
     * @memberof Permission
     */
    'version': number;
    /**
     * 
     * @type {PermissionLinks}
     * @memberof Permission
     */
    '_links'?: PermissionLinks;
}
