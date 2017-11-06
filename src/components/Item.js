import React from 'react'
import { Link } from 'react-router-dom'
import TagList from '../containers/tagList'

export const Item = (props) => {
    const { id, description, created_at, tag } = props

    return (
        <li>
            <Link to={`/gist/${id}`}>
                {description}
                <time>{created_at}</time>
            </Link>
            {tag && <TagList gistId={id} tag={tag} />}
        </li>
    )
}
