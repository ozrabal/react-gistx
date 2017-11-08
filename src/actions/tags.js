export const types = {
    REQUEST_TAGS: 'REQUEST_TAGS',
    RECEIVED_TAGS: 'RECEIVED_TAGS',
    ERROR_REQUESTING_TAGS: 'ERROR_REQUESTING_TAGS',
    ADD_TAG: 'ADD_TAG',
    ADDED_TAG: 'ADDED_TAG',
    ERROR_ADDING_TAG: 'ERROR_ADDING_TAG',
    REMOVE_TAG: 'REMOVE_TAG',
    REMOVED_TAG: 'REMOVED_TAG',
    ERROR_REMOVING_TAG: 'ERROR_REMOVING_TAG',
}

export const requestTags = () => ({
    type: types.REQUEST_TAGS
})

export const receivedTags = (tags) => ({
    payload: {
        tags
    },
    type: types.RECEIVED_TAGS
})

export const errorRequestingTags = (error) => ({
    payload: {
        error
    },
    type: types.ERROR_REQUESTING_TAGS
})

export const addTag = (tag, gist_id) => ({
    payload: {
        tag,
        gist_id
    },
    type: types.ADD_TAG
})

export const addedTag = (tags) => ({
    payload: {
        tags
    },
    type: types.ADDED_TAG
})

export const errorAddingTag = (error) => ({
    payload: {
        error
    },
    type: types.ERROR_ADDING_TAG
})

export const removeTag = (tag, gist_id) => ({
    payload: {
        tag,
        gist_id
    },
    type: types.REMOVE_TAG
})

export const removedTag = (tags) => ({
    payload: {
        tags
    },
    type: types.REMOVED_TAG
})

export const errorRemovingTag = (error) => ({
    payload: {
        error
    },
    type: types.ERROR_REMOVING_TAG
})
