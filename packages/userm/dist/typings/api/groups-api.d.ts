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
    addRoles(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Adds a role to a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of user identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    addUsers(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Creates a new group
     * @param {CreateGroupRequest} createGroupRequest The group information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    createGroup(createGroupRequest: CreateGroupRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Group, any>>;
    /**
     *
     * @summary Delete an existing user
     * @param {number} id The group identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    deleteGroup(id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User, any>>;
    /**
     * Retrieves the full details of a group.
     * @summary Retrieves a group by it\'s id
     * @param {number} id The group identifier
     * @param {string} [ifNoneMatch]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    getGroup(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Group, any>>;
    /**
     * Retrieves the full details of a group.
     * @summary Retrieves a group by it\'s name
     * @param {string} name The group name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    getGroupByName(name: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Group, any>>;
    /**
     *
     * @summary Removes a role from a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of role identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    removeRoles(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Removes a user from a group
     * @param {number} id The group identifier
     * @param {Array<number>} requestBody The list of user identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    removeUsers(id: number, requestBody: Array<number>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Search groups
     * @param {string} [q] The query
     * @param {number} [from] the first result to return
     * @param {number} [size] the number of results to return
     * @param {string} [sort]
     * @param {boolean} [ascending] Should the results be returned in asceding order
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    searchGroups(q?: string, from?: number, size?: number, sort?: string, ascending?: boolean, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Group, any>>;
    /**
     *
     * @summary Update an existing group
     * @param {number} id The group identifier
     * @param {UpdateGroupRequest} updateGroupRequest The updated group information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsApi
     */
    updateGroup(id: number, updateGroupRequest: UpdateGroupRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Group, any>>;
}
