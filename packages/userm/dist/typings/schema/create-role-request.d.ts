import { ProductName } from "./product-name";
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
    'description': string;
    /**
     *
     * @type {string}
     * @memberof CreateRoleRequest
     */
    'product'?: string;
    /**
     *
     * @type {ProductName}
     * @memberof CreateRoleRequest
     */
    'productName': ProductName;
}
