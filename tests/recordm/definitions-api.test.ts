import {DefinitionsApi} from "@cob/cobjs-api-recordm"
import {AuthenticationApi} from "@cob/cobjs-api-userm";
import {cookieJar, getServer} from "@cob/cobjs-api-core";

const authenticationApi = new AuthenticationApi()

beforeAll(async () => {
    const authResponse = await authenticationApi.authenticate({username: "jestTests", password: "1jestTests2"})
    cookieJar.setCookieSync("cobtoken=" + authResponse.securityToken + ";", getServer());
})

afterAll(async () => {
    await authenticationApi.logout()
    cookieJar.removeAllCookiesSync();
})

test("Can list all active definitions with (no filter)", async () => {
    const definitionsApi = new DefinitionsApi()
    const definitions = await definitionsApi.getAllDefinitions()
    expect(definitions.length).toBeGreaterThanOrEqual(3)

    const countriesName = definitions.sort((d1, f2) => d1.id - f2.id).map((def) => def.name)

    const expectedDefinitions = ["Countries", "Countries Series", "E-learning Contents"]
    expectedDefinitions.forEach((c: string) => expect(countriesName).toContain(c))
})