import {getServer} from '@cob/cobjs-api-core'
import {Instance, IntegrationApi} from '@cob/cobjs-api-recordm'
import {UIInstance} from "../schema";

const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

export const rmAddInstance = function (definitionName: string, values: { [K: string]: any }): Promise<UIInstance> {
    const data = {
        type: definitionName,
        values: values,
    }

    const integrationApi = new IntegrationApi()
    return integrationApi.add(data).then((data) => {
        const instance = data as UIInstance
        const id = instance.id

        //Add resultsUrl to response
        instance.resultsUrl = ResultURLTemplate.replace("__INSTANCE_ID__", `${id}`)
        if (typeof window === "undefined") {
            instance.resultsUrl = getServer() + instance.resultsUrl
        }

        return instance
    })
}
