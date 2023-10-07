/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const UserState = {
    ENABLED: 'enabled',
    DISABLED: 'disabled'
} as const;

export type UserState = typeof UserState[keyof typeof UserState];


