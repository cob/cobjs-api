import { Permission } from "./permission";
import { RoleLinks } from "./role-links";
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
    /**
     *
     * @type {Array<Permission>}
     * @memberof Role
     */
    'permissions'?: Array<Permission>;
}
