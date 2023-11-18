import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { CreateGroupRequest } from '../schema';
import { Group } from '../schema';
import { UpdateGroupRequest } from '../schema';
import { User } from '../schema';
/**
 * GroupsApi - object-oriented interface
 * @export
 * @class GroupsApi
 * @extends {BaseAPI}
 */
export declare class GroupsApi extends BaseAPI {
    /**
     *
     * @summary Adds a role to a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of role identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    addRoles(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Adds a role to a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of user identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    addUsers(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Creates a new group
     * @param {CreateGroupRequest} createGroupRequest The group information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    createGroup(createGroupRequest: CreateGroupRequest, options?: AxiosRequestConfig): Promise<Group>;
    /**
     *
     * @summary Delete an existing user
     * @param {number} id The group identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    deleteGroup(id: number, options?: AxiosRequestConfig): Promise<User>;
    /**
     * Retrieves the full details of a group.
     * @summary Retrieves a group by it\'s id
     * @param {number} id The group identifier
     * @param {string} [ifNoneMatch]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    getGroup(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<Group>;
    /**
     * Retrieves the full details of a group.
     * @summary Retrieves a group by it\'s name
     * @param {string} name The group name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    getGroupByName(name: string, options?: AxiosRequestConfig): Promise<Group>;
    /**
     *
     * @summary Removes a role from a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of role identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    removeRoles(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Removes a user from a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of user identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    removeUsers(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<void>;
    /**
     *
     * @summary Update an existing group
     * @param {number} id The group identifier
     * @param {UpdateGroupRequest} updateGroupRequest The updated group information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    updateGroup(id: number, updateGroupRequest: UpdateGroupRequest, options?: AxiosRequestConfig): Promise<Group>;
}
