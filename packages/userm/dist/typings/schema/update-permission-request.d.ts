import { ProductName } from "./product-name";
/**
 *
 * @export
 * @interface UpdatePermissionRequest
 */
export interface UpdatePermissionRequest {
    /**
     *
     * @type {number}
     * @memberof UpdatePermissionRequest
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof UpdatePermissionRequest
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof UpdatePermissionRequest
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof UpdatePermissionRequest
     */
    'product'?: string;
    /**
     *
     * @type {number}
     * @memberof UpdatePermissionRequest
     */
    'version': number;
    /**
     *
     * @type {ProductName}
     * @memberof UpdatePermissionRequest
     */
    'productName': ProductName;
}
