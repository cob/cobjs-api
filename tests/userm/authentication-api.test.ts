import {AuthenticationApi, UsersApi} from "@cob/cobjs-api-userm";
import {cookieJar, getServer} from "@cob/cobjs-api-core";

test.skip("can authenticate", async () => {

    const username = ""
    const password = ""

    const authResponse = await new AuthenticationApi().authenticate({username, password})
    cookieJar.setCookieSync("cobtoken=" + authResponse.securityToken + ";", getServer());

    const loggedInUser = await new UsersApi().getLoggedInUser();
    expect(loggedInUser.loggedInUser.username).toStrictEqual(username)
    cookieJar.removeAllCookiesSync();
})