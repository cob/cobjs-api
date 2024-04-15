import { AuthenticationApi, PermissionsApi, ProductName } from "@cob/cobjs-api-userm";
import { cookieJar, getServer, setServer } from "@cob/cobjs-api-core";
import axios, { AxiosError } from "axios";

const authenticationApi = new AuthenticationApi();

const adminUsername = "";
const adminPassword = "";

beforeAll(async () => {
  setServer("https://training.cultofbits.com");

  const authResponse = await authenticationApi.authenticate({ username: adminUsername, password: adminPassword });
  cookieJar.setCookieSync("cobtoken=" + authResponse.securityToken + ";", getServer());
});

afterAll(async () => {
  await authenticationApi.logout();
  cookieJar.removeAllCookiesSync();
});

test.skip("can create and delete permission", async () => {
  let permissionsApi = new PermissionsApi();

  const createPermissionPromise = await (permissionsApi.createPermission({
    name: "*:*:1",
    product: ProductName.RECORDM
  }));

  expect(createPermissionPromise.id).toBeDefined()
  expect(createPermissionPromise.name).toStrictEqual("*:*:1")
  expect(createPermissionPromise.product).toStrictEqual(ProductName.RECORDM)
  expect(createPermissionPromise.version).toBeDefined()

  const permissionId = createPermissionPromise.id;
  await permissionsApi.deletePermission(permissionId);

  try {
    let permission = await permissionsApi.getPermission(permissionId);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;

      if (axiosError?.response?.status !== 404) {
        fail("Error deleting permission");
      }
    }

  }
});