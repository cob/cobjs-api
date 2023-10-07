/* eslint-disable */

// May contain unused imports in some cases
import { ProductName } from "./product-name"

/**
 * 
 * @export
 * @interface UpdateRoleRequest
 */
export interface UpdateRoleRequest {
    /**
     * 
     * @type {number}
     * @memberof UpdateRoleRequest
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof UpdateRoleRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateRoleRequest
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateRoleRequest
     */
    'product'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateRoleRequest
     */
    'version': number;
    /**
     * 
     * @type {ProductName}
     * @memberof UpdateRoleRequest
     */
    'productName': ProductName;
}
