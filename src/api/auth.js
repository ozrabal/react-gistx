import 'whatwg-fetch'
// import base64 from 'base-64'
import { api } from '../config'
import { getToken } from '../utils'

export const validateToken = async () => {
    let endpoint = api.endpoints.VALIDATE_TOKEN
    // endpoint = endpoint.replace(':client_id', '3f5fd2bb1690c65b8936')
    endpoint = endpoint.replace(':access_token', getToken() )
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const json = await response.json()
    if(response.status < 200 || response.status > 400 || !json.token) {
        const error = new Error(json.message && (json.message || response.statusText))
        error.response = json
        throw error
        // return json
    }
    return json
}
