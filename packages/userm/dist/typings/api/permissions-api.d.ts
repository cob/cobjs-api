import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { CreatePermissionRequest } from '../schema';
import { Permission } from '../schema';
import { ProductName } from '../schema';
import { UpdatePermissionRequest } from '../schema';
/**
 * PermissionsApi - object-oriented interface
 * @export
 * @class PermissionsApi
 * @extends {BaseAPI}
 */
export declare class PermissionsApi extends BaseAPI {
    /**
     *
     * @summary Creates a new permission
     * @param {CreatePermissionRequest} createPermissionRequest The permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    createPermission(createPermissionRequest: CreatePermissionRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Permission, any>>;
    /**
     *
     * @summary Delete an existing permission
     * @param {number} id The permission identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    deletePermission(id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Permission, any>>;
    /**
     * Retrieves the full details of a permission.
     * @summary Retrieves a permission by it\'s id
     * @param {number} id The permission identifier
     * @param {string} [ifNoneMatch]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    getPermission(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Permission, any>>;
    /**
     * Retrieves the full details of a permission.
     * @summary Retrieves a permission by it\'s product and name
     * @param {ProductName} product
     * @param {string} name The permission name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    getPermissionByProductAndName(product: ProductName, name: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Permission, any>>;
    /**
     *
     * @summary Update an existing permission
     * @param {number} id The permission identifier
     * @param {UpdatePermissionRequest} updatePermissionRequest The updated permission information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionsApi
     */
    updatePermission(id: number, updatePermissionRequest: UpdatePermissionRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Permission, any>>;
}
