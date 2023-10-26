import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { CreateRoleRequest } from '../schema';
import { ProductName } from '../schema';
import { Role } from '../schema';
import { UpdateRoleRequest } from '../schema';
/**
 * RolesApi - object-oriented interface
 * @export
 * @class RolesApi
 * @extends {BaseAPI}
 */
export declare class RolesApi extends BaseAPI {
    /**
     *
     * @summary Adds permissions to a role
     * @param {number} id The role identifier
     * @param {Array<number>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    addPermissions(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Creates a new role
     * @param {CreateRoleRequest} createRoleRequest The role information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    createRole(createRoleRequest: CreateRoleRequest, options?: AxiosRequestConfig): Promise<Role>;
    /**
     *
     * @summary Delete an existing role
     * @param {number} id The role identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    deleteRole(id: number, options?: AxiosRequestConfig): Promise<Role>;
    /**
     * Retrieves the full details of a role.
     * @summary Retrieves a role by it\'s id
     * @param {number} id The role identifier
     * @param {string} [ifNoneMatch]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    getRole(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<Role>;
    /**
     * Retrieves the full details of a role.
     * @summary Retrieves a role by it\'s product and name
     * @param {ProductName} product
     * @param {string} name The role name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    getRoleByProductAndName(product: ProductName, name: string, options?: AxiosRequestConfig): Promise<Role>;
    /**
     *
     * @summary Removes permissions from a role
     * @param {number} id The role identifier
     * @param {Array<number>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    removePermissions(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Update an existing role
     * @param {number} id The role identifier
     * @param {UpdateRoleRequest} updateRoleRequest The updated role information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    updateRole(id: number, updateRoleRequest: UpdateRoleRequest, options?: AxiosRequestConfig): Promise<Role>;
}
