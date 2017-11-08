import React from 'react'
import { Tag } from '../styled'

export const TagButton = (props) => {
    const { tag, onRemoveClick, remove } = props

    return <Tag>{tag}{remove && <button type="button" onClick={onRemoveClick}>x</button>}</Tag>
}
