import { ProductName } from "./product-name";
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
    'description'?: string;
    /**
     *
     * @type {ProductName}
     * @memberof UpdateRoleRequest
     */
    'product': ProductName;
    /**
     *
     * @type {number}
     * @memberof UpdateRoleRequest
     */
    'version': number;
}
