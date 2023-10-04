import {auth, logout, rmListDefinitions} from "@cob/cobjs-api-helpers";

beforeAll(async () => await auth({username: "jestTests", password: "1jestTests2"}))
afterAll(async () => await logout())

test("Can list all active definitions with (no filter)", async () => {
    const definitions = await rmListDefinitions()
    expect(definitions.length).toBeGreaterThanOrEqual(3)

    const countriesName = definitions.sort((d1, f2) => d1.id - f2.id)
        .map((def) => def.name)

    const expectedDefinitions = ["Countries", "Countries Series", "E-learning Contents"]
    expectedDefinitions.forEach((c: string) => expect(countriesName).toContain(c))
})

test("Can find definitions matching name", async () => {

    const definitions = await rmListDefinitions({name: "Countries*"})
    expect(definitions.length).toBeGreaterThanOrEqual(2)

    const countryDefinitions = definitions.map((def) => def.name)

    expect(countryDefinitions).toContain("Countries")
    expect(countryDefinitions).toContain("Countries Series")
})
