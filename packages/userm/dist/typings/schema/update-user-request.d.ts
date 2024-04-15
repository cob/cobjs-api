import { User } from "./user";
import { UserState } from "./user-state";
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
    'version': number;
    /**
     *
     * @type {UserState}
     * @memberof UpdateUserRequest
     */
    'state'?: UserState;
    /**
     *
     * @type {Array<User>}
     * @memberof UpdateUserRequest
     */
    'substitutedUsers'?: Array<User>;
}
