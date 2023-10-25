/* eslint-disable */

// May contain unused imports in some cases
import { User } from "./user"

/**
 * 
 * @export
 * @interface LoggedInUser
 */
export interface LoggedInUser {
    /**
     * 
     * @type {User}
     * @memberof LoggedInUser
     */
    'loggedInUser': User;
    /**
     * 
     * @type {User}
     * @memberof LoggedInUser
     */
    'realUser'?: User;
}
