import React from 'react'
import { TagButton } from './tag'
import { TagList } from '../styled'

export const Tags = (props) => {
    const { tags } = props
    let list = null
    if (tags) {
        list = tags.map((tag) =>
            <TagButton key={tag} tag={tag} />
        )
    }
    return (
        <TagList>
            {list}
        </TagList>
    )
}
