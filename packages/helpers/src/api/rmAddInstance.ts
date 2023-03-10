import {getServer} from '@cob/cobjs-api-core'
import {IntegrationApi} from '@cob/cobjs-api-recordm'
import {UIInstance} from '../schema/index'

const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

export const rmAddInstance = function (definitionName: string, values: { [K: string]: any }): Promise<UIInstance> {
  const data = {
    type: definitionName,
    values: values,
  }

  const integrationApi = new IntegrationApi()
  return integrationApi.add(data).then((response) => {
    const instance = response.data as UIInstance
    const id = instance.id

    //Add resultsUrl to response
    instance.resultsUrl = ResultURLTemplate.replace("__INSTANCE_ID__", `${id}`)
    if (typeof window === "undefined") {
      instance.resultsUrl = getServer() + instance.resultsUrl
    }

    return instance
  })
}
