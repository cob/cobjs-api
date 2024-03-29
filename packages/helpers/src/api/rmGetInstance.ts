import {getServer} from '@cob/cobjs-api-core'
import {InstancesApi} from '@cob/cobjs-api-recordm'
import {UIInstance} from '../schema'

const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

export const rmGetInstance = function (instanceId: number): Promise<UIInstance> {
  const instancesApi = new InstancesApi()

  return instancesApi.getInstance(instanceId).then((response) => {
    const instance = response as UIInstance
    const id = instance.id

    //Add resultsUrl to response
    instance.resultsUrl = ResultURLTemplate.replace("__INSTANCE_ID__", `${id}`)
    if (typeof window === "undefined") {
      instance.resultsUrl = getServer() + instance.resultsUrl
    }

    return instance
  })
}