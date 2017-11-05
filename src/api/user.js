import 'whatwg-fetch'

import { api } from '../config'
import { setHeaders } from '../utils'

export const fetchUser = async () => {
  const endpoint = api.endpoints.GET_USER
  const response = await fetch(endpoint, {
    headers: setHeaders()
  })
  const json  = await response.json()
  if(response.status < 200 || response.status > 400) {
      const error = new Error(json.message && (json.message || response.statusText))
      error.response = json
      throw error
      // return json
  }
  return json
}
