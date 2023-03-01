export declare const auth: ({ username, password, token }: {
    username?: string | undefined;
    password?: string | undefined;
    token?: string | undefined;
}) => Promise<import("..").UmLoggedInResponse>;
