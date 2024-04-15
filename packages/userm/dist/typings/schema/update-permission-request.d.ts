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
    'description'?: string;
    /**
     *
     * @type {ProductName}
     * @memberof UpdatePermissionRequest
     */
    'product': ProductName;
    /**
     *
     * @type {number}
     * @memberof UpdatePermissionRequest
     */
    'version': number;
}
