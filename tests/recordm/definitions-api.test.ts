import { DefinitionsApi } from "@cob/cobjs-api-recordm"
import { auth, logout } from "@cob/cobjs-api-helpers";

beforeAll(async () => await auth({ username: "jestTests", password: "1jestTests2" }))
afterAll(async () => await logout())

test("Can list all active definitions with (no filter)", async () => {
  const definitionsApi = new DefinitionsApi()
  const definitions = (await definitionsApi.getAllDefinitions()).data
  expect(definitions.length).toBeGreaterThanOrEqual(3)

  const countriesName = definitions.sort((d1, f2) => d1.id - f2.id).map((def) => def.name)

  const expectedDefinitions = ["Countries", "Countries Series", "E-learning Contents"]
  expectedDefinitions.forEach((c: string) => expect(countriesName).toContain(c))
})
