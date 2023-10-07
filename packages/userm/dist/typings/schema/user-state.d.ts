/**
 *
 * @export
 * @enum {string}
 */
export declare const UserState: {
    readonly ENABLED: "enabled";
    readonly DISABLED: "disabled";
};
export type UserState = typeof UserState[keyof typeof UserState];
