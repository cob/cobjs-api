/* eslint-disable */

// May contain unused imports in some cases
import { ProductName } from "./product-name"

/**
 * 
 * @export
 * @interface CreateRoleRequest
 */
export interface CreateRoleRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateRoleRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateRoleRequest
     */
    'description'?: string;
    /**
     * 
     * @type {ProductName}
     * @memberof CreateRoleRequest
     */
    'product': ProductName;
}


