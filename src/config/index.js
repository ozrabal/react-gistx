const BASE_API_URL = 'http://localhost:9000/_api'

export const api = {
    endpoints: {
      GET_GISTS: `${ BASE_API_URL }/gists`,
      GET_GIST: `${ BASE_API_URL }/gists/:gist_id`,
      GET_USER: `${ BASE_API_URL }/user`,
      VALIDATE_TOKEN: `${ BASE_API_URL }/validate/:access_token`
    }
  }
