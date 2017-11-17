import React from 'react'
import { Link } from 'react-router-dom'
import { Tag } from '../styled'

export const TagButton = (props) => {
    const { tag, onRemoveClick, remove } = props

    return <Tag><Link to={`/tag/${tag}`}>{tag}</Link>{remove && <button type="button" onClick={onRemoveClick}>x</button>}</Tag>
}
