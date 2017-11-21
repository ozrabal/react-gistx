export const types = {
    REQUEST_GISTS: 'REQUEST_GISTS',
    RECEIVED_GISTS: 'RECEIVED_GISTS',
    ERROR_REQUESTING_GISTS: 'ERROR_REQUESTING_GISTS',
    APPLY_TAGS: 'APPLY_TAGS',
    APPLIED_TAGS: 'APPLIED_TAGS',
    ERROR_APPLYING_TAGS: 'ERROR_APPLYING_TAGS',
    FILTER_BY_TAG: 'FILTER_BY_TAG',
    FILTERED_BY_TAG: 'FILTERED_BY_TAG',
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

export const filterByTag = (tag) => ({
    payload: {
        tag
    },
    type: types.FILTER_BY_TAG
})

export const filteredBytag = (tag, gists) => ({
    payload: {
        tag,
        gists
    },
    type: types.FILTERED_BY_TAG
})
