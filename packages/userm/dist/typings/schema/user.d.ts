import { Group } from "./group";
import { UserLinks } from "./user-links";
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {number}
     * @memberof User
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'usernameAD'?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'contact'?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'password'?: string;
    /**
     *
     * @type {User}
     * @memberof User
     */
    'substitute'?: User;
    /**
     *
     * @type {number}
     * @memberof User
     */
    'version': number;
    /**
     *
     * @type {Array<Group>}
     * @memberof User
     */
    'groups'?: Array<Group>;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'state'?: UserStateEnum;
    /**
     *
     * @type {Array<User>}
     * @memberof User
     */
    'substitutedUsers'?: Array<User>;
    /**
     *
     * @type {UserLinks}
     * @memberof User
     */
    '_links'?: UserLinks;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    'passwordCleared'?: boolean;
}
export declare const UserStateEnum: {
    readonly ENABLED: "enabled";
    readonly DISABLED: "disabled";
};
export declare type UserStateEnum = typeof UserStateEnum[keyof typeof UserStateEnum];
