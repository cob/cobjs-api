import {getServer} from '@cob/cobjs-api-core'
import axios from "axios"

const QueryURLTemplate = "/confm/confm/search?from=__FROM__&size=__SIZE__&q=__QUERY__"
const ResultsURLTemplate = "/confm/#/search/q=__QUERY__"

export const dmEquipmentSearch = async function (query = "*", from = 0, size = 0) {
  const queryUrl = QueryURLTemplate.replace("__QUERY__", query)
    .replace("__FROM__", `${from}`)
    .replace("__SIZE__", `${size}`)

  return axios
    .get(getServer() + queryUrl)
    .then((response) => {
      //Add resultsUrl to response
      response.data.resultsUrl = getServer() + ResultsURLTemplate.replace("__QUERY__", query)
      return response.data
    })
    .catch((e) => {
      throw e
    })
}
