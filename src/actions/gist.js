export const types = {
    REQUEST_GIST: 'REQUEST_GIST',
    RECEIVED_GIST: 'RECEIVED_GIST',
    ERROR_REQUESTING_GIST: 'ERROR_REQUESTING_GIST',
    ATTACH_TAGS: 'ATTACH_TAGS',
    ATTACHED_TAGS: 'ATTACHED_TAGS',
    ERROR_ATTACHING_TAGS: 'ERROR_ATTACHING_TAGS',
    DETACH_TAG: 'DETACH_TAG',
    DETACHED_TAG: 'DETACHED_TAG',
    ERROR_DETACHING_TAG: 'ERROR_DETACHING_TAG',
}

export const requestGist = (id) => ({
    payload:{
        id
    },
    type: types.REQUEST_GIST
})

export const receivedGist = (gist) => ({
    payload: {
        gist
    },
    type: types.RECEIVED_GIST
})

export const errorRequestingGist = (error) => ({
    payload: {
        error
    },
    type: types.ERROR_REQUESTING_GIST
})

export const attachTags = (tags) => ({
    payload: {
        tags
    },
    type: types.ATTACH_TAGS
})

export const attachedTags = () => ({
    type: types.ATTACHED_TAGS
})

export const errorAttachingTags = (error) => ({
    payload: {
        error
    },
    type: types.ERROR_ATTACHING_TAGS
})

export const detachTag = (tag, id) => ({
    payload: {
        tag,
        id
    },
    type: types.DETACH_TAG
})

export const detachedTag = (tag, id) => ({
    payload: {
        tag,
        id
    },
    type: types.DETACHED_TAG
})

export const errorDetachingTag = (error) => ({
    payload: {
        error
    },
    type: types.ERROR_DETACHING_TAG
})
