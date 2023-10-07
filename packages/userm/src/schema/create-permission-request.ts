/* eslint-disable */

// May contain unused imports in some cases
import { ProductName } from "./product-name"

/**
 * 
 * @export
 * @interface CreatePermissionRequest
 */
export interface CreatePermissionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatePermissionRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePermissionRequest
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePermissionRequest
     */
    'product'?: string;
    /**
     * 
     * @type {ProductName}
     * @memberof CreatePermissionRequest
     */
    'productName': ProductName;
}
