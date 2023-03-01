import { Group } from "./group";
import { User } from "./user";
/**
 *
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     *
     * @type {number}
     * @memberof UpdateUserRequest
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'usernameAD'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'email': string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'contact'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'password'?: string;
    /**
     *
     * @type {User}
     * @memberof UpdateUserRequest
     */
    'substitute'?: User;
    /**
     *
     * @type {number}
     * @memberof UpdateUserRequest
     */
    'version'?: number;
    /**
     *
     * @type {Array<Group>}
     * @memberof UpdateUserRequest
     */
    'groups'?: Array<Group>;
    /**
     *
     * @type {string}
     * @memberof UpdateUserRequest
     */
    'state'?: UpdateUserRequestStateEnum;
    /**
     *
     * @type {Array<User>}
     * @memberof UpdateUserRequest
     */
    'substitutedUsers'?: Array<User>;
    /**
     *
     * @type {boolean}
     * @memberof UpdateUserRequest
     */
    'passwordCleared'?: boolean;
}
export declare const UpdateUserRequestStateEnum: {
    readonly ENABLED: "enabled";
    readonly DISABLED: "disabled";
};
export declare type UpdateUserRequestStateEnum = typeof UpdateUserRequestStateEnum[keyof typeof UpdateUserRequestStateEnum];
