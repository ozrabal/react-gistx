import 'whatwg-fetch'

import { api } from '../config'
import { setHeaders } from '../utils'


export const fetchGists = async () => {
    const endpoint = api.endpoints.GET_GISTS
    const response = await fetch(endpoint, {
      headers: setHeaders()
    })
    const json = await response.json()
    if(response.status < 200 || response.status > 400) {
        const error = new Error(json.message && (json.message || response.statusText))
        error.response = json
        throw error
        // return json
    }
    return json
}

export const fetchGist = async (gistId) => {
    let endpoint = api.endpoints.GET_GIST
    endpoint = endpoint.replace(':gist_id', gistId)
    const response = await fetch(endpoint, {
        headers: setHeaders()
    })
    const json = await response.json()
    if(response.status < 200 || response.status > 400) {
        const error = new Error(json.message && (json.message || response.statusText))
        error.response = json
        throw error
    }
    return json
}
