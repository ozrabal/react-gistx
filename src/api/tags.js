// import { api } from '../config'

const tagExist = (tag, gist_id, tags_collection) => {
    if (tags_collection && tags_collection[gist_id]) {
        return tags_collection[gist_id].findIndex((value) => value === tag) > -1 ? true : false
    }
    return false
}

export const initTagStorage = () => {
    localStorage.setItem('tags', JSON.stringify({}))
}

export const fetchTags = async () => {
    const response = await localStorage.getItem('tags')
    const json = await JSON.parse(response)

    if(!response) {
        const error = new Error('Local storage key not exists, created empty placeholder for tags')
        initTagStorage()
        error.response = json
        throw error
    }
    return json
}

export const saveTag = (tag, gist_id) => {
    let tags_collection = JSON.parse(localStorage.getItem('tags'))
    const tag_exist = tagExist(tag, gist_id, tags_collection)
    if (!tag_exist) {
        if(!tags_collection){
            tags_collection = {
                [gist_id]:[tag]
            }
        } else {
            if(!tags_collection[gist_id]){
                tags_collection[gist_id] = []
            }
            tags_collection[gist_id].push(tag)
        }
        localStorage.setItem('tags', JSON.stringify(tags_collection))
        return tags_collection
    }
}

export const removeTag = (tag, gist_id) => {
    let tags_collection = JSON.parse(localStorage.getItem('tags'))
    const tag_exist = tagExist(tag, gist_id, tags_collection)
    if (tag_exist) {
        let tags = tags_collection[gist_id].filter((element, index, array) => {return element !== tag })
        tags_collection[gist_id] = tags
        localStorage.setItem('tags', JSON.stringify(tags_collection))
        return tags_collection
    }
}
