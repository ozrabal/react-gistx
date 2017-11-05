export const types = {
    REQUEST_GISTS: 'REQUEST_GISTS',
    RECEIVED_GISTS: 'RECEIVED_GISTS',
    ERROR_REQUESTING_GISTS: 'ERROR_REQUESTING_GISTS',

    /*ADD_TAG: 'ADD_TAG',
    ADDED_TAG: 'ADDED_TAG',
    ERROR_ADDING_TAG: 'ERROR_ADDING_TAG',
    REMOVE_TAG: 'REMOVE_TAG',
*/
    APPLY_TAGS: 'APPLY_TAGS',
    APPLIED_TAGS: 'APPLIED_TAGS',
    ERROR_APPLYING_TAGS: 'ERROR_APPLYING_TAGS'
}

export const requestGists = () => ({
    type: types.REQUEST_GISTS
})

export const receivedGists = (gists) => ({
    payload: {
        gists
    },
    type: types.RECEIVED_GISTS
})

export const errorRequestingGists = (error) => ({
    payload: {
      error
    },
    type: types.ERROR_REQUESTING_GISTS
})

/*
export const addTag = (tag, gist_id = null) => ({
    payload: {
        tag,
        gist_id
    },
    type: types.ADD_TAG
})

export const addedTag = (payload) => ({
    payload,
    type: types.ADDED_TAG
})
export const errorAddingTag = (error) => ({
    payload: {
      error
    },
    type: types.ERROR_ADDING_TAG
})
*/
export const applyTags = (tags) => ({
    payload: {
        tags
    },
    type: types.APPLY_TAGS
})

export const appliedTags = (tags) => ({
    payload: {
        tags
    },
    type: types.APPLIED_TAGS
})

export const errorApplyingTags = (error) => ({
    payload: {
        error
    },
    type: types.ERROR_APPLYING_TAGS
})
