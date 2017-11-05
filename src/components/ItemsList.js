import React from 'react'
import { Item } from './Item'
import { List } from '../styled'

export const ItemsList = (props) => {
    let { items } = props
    let list = null
    if (items) {
        list = items.map((gist) =>
            <Item key={gist.id} description={gist.description} id={gist.id} created_at={gist.created_at} tag={gist.tag}/*onClickItem={onClickItem} *//>
        );
    }

    return <List>{list}</List>
}
