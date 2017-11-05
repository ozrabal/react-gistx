import React from 'react'

export const TagButton = (props) => {
    const { tag, onRemoveClick } = props

    return <span>{tag}<button type="button" onClick={onRemoveClick}>x</button></span>
}
