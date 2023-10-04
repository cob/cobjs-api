import {setServer} from "@cob/cobjs-api-core";
import {Group, UpdateUserRequest, UpdateUserRequestStateEnum, UsersApi} from "@cob/cobjs-api-userm";
import {auth} from "@cob/cobjs-api-helpers";

const adminUsername = ""
const adminPassword = ""

test("can retrieve user data with username", async () => {

    const anonymousUser = (await new UsersApi().getUserByUsername("anonymous")).data

    expect(anonymousUser.username).toStrictEqual("anonymous")
    expect(anonymousUser.id).toStrictEqual(1)
    expect(anonymousUser.name).toStrictEqual("anonymous")
    expect(anonymousUser.state).toStrictEqual(UpdateUserRequestStateEnum.ENABLED)
    expect(anonymousUser._links?.perms).toStrictEqual("userm/user/1/perms")
    expect(anonymousUser.groups?.map((g: Group) => g.name)).toContain('FUNC Build Tests')
})

test.skip("can update user data with username", async () => {

    await auth({username: adminUsername, password: adminPassword})
    const usersApi = new UsersApi();

    const userData = (await usersApi.getUserByUsername("demo")).data

    const now = Date.now()
    userData.name = "a_" + now
    userData.email = "a_" + now + '@cob.pt'
    userData.state = UpdateUserRequestStateEnum.DISABLED
    userData.usernameAD = "ad.a_" + now

    const afterUpdate = (await usersApi.updateUser(userData.id, userData)).data

    expect(afterUpdate.username).toStrictEqual("demo")
    expect(afterUpdate.id).toStrictEqual(14)
    expect(afterUpdate.name).toStrictEqual("a_" + now)
    expect(afterUpdate.email).toStrictEqual("a_" + now + '@cob.pt')
    expect(afterUpdate.usernameAD).toStrictEqual("ad.a_" + now)
    expect(afterUpdate.state).toStrictEqual(UpdateUserRequestStateEnum.DISABLED)
    expect(afterUpdate.version).toStrictEqual(userData.version + 1)
    expect(afterUpdate._links?.self).toStrictEqual("/userm/user/14")
})

test.skip("can change password", async () => {

    await auth({username: adminUsername, password: adminPassword})
    const usersApi = new UsersApi();

    let initialUserData = (await usersApi.getUserByUsername("demo")).data

    const now = Date.now()
    const newPassword = 'a_' + now;

    let newUserData = initialUserData as UpdateUserRequest;
    newUserData.state = UpdateUserRequestStateEnum.ENABLED
    newUserData.password = newPassword

    const afterUpdate = (await usersApi.updateUser(initialUserData.id, newUserData)).data
    expect(afterUpdate.state).toStrictEqual(UpdateUserRequestStateEnum.ENABLED)

    const umLoggedInResponse = await auth({username: "demo", password: newPassword});
    expect(umLoggedInResponse.username).toStrictEqual("demo")
})