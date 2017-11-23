import React from 'react'
import { Item } from './Item'
import { List } from '../styled'
import { Loading } from  './loading'

/**
 * Component render list of gists
 * @param {Array} items array of gists
 */
export const ItemsList = ({items}) => {

    let list = null
    if (items && items.length) {
        list = items.map((gist) =>
            <Item key={gist.id} description={gist.description} id={gist.id} created_at={gist.created_at} tag={gist.tag} />
        )
    }
    return (
        <List>
            {!list && <Loading />}
            {list}
        </List>
    )
}
