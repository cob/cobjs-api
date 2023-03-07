import {getServer} from '@cob/cobjs-api-core'
import axios from "axios"

export const logout = async function () {
  return await axios.get(getServer() + "/userm/security/auth/logout")
}