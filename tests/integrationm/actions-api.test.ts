import {ActionsApi} from "@cob/cobjs-api-integrationm";

test("Can call a concurrent action", async () => {
    let data = {name: "Guest"};
    const actionsApi = new ActionsApi();
    const result = await actionsApi.executeConcurrentAction("welcome", data)
    expect(result).toStrictEqual(`Hey ${data.name}. Welcome to Cultofbits!`)
})