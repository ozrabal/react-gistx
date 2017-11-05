import React from 'react'
import { Link } from 'react-router-dom'
import TagList from '../containers/tagList'
import { detachTag } from '../actions/gist'
export const Item = (props) => {
    const { id, description, created_at, tag } = props
//console.log('detach');
//detachTag('tag', '0cc3176940d22690bc52439837a4af78')
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
