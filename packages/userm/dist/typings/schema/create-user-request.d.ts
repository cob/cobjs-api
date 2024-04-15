import { User } from "./user";
import { UserState } from "./user-state";
/**
 *
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     *
     * @type {string}
     * @memberof CreateUserRequest
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRequest
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRequest
     */
    'usernameAD'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRequest
     */
    'email': string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRequest
     */
    'contact'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRequest
     */
    'password'?: string;
    /**
     *
     * @type {User}
     * @memberof CreateUserRequest
     */
    'substitute'?: User;
    /**
     *
     * @type {UserState}
     * @memberof CreateUserRequest
     */
    'state'?: UserState;
    /**
     *
     * @type {Array<User>}
     * @memberof CreateUserRequest
     */
    'substitutedUsers'?: Array<User>;
}
