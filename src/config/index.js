const BASE_API_URL = process.env.REACT_APP_API_URL
const BASE_EMBED_ITEM_URL = 'https://gist.github.com'

export const api = {
    endpoints: {
        GET_GISTS: `${ BASE_API_URL }/gists`,
        GET_GIST: `${ BASE_API_URL }/gists/:gist_id`,
        GET_USER: `${ BASE_API_URL }/user`,
        VALIDATE_TOKEN: `${ BASE_API_URL }/validate/:access_token`,
        APP_EMBED_ITEM_URL: `${ BASE_EMBED_ITEM_URL }/:id.json?callback=:callback`,
    }
}
