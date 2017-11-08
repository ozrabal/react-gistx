import React from 'react'
import { Link } from 'react-router-dom'
import TagList from '../containers/tagList'
import { Time } from '../styled'
export const Item = (props) => {
    const { id, description, created_at, tag } = props

    return (
        <li>
            <Link to={`/gist/${id}`}>
                <div>{description}</div>
                <Time>{created_at}</Time>
            </Link>
            {tag && <TagList gistId={id} tag={tag}/>}
        </li>
    )
}
