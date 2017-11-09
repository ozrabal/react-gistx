import React, { PureComponent } from 'react'
import TagInput from '../containers/tagInput'
import TagList from '../containers/tagList'
import EmbeddedGist from '../containers/gistembeded'
import { NotFound } from '../components/notFound'

class GistItem extends PureComponent  {

    render() {
        const { item } = this.props
        if (!item) {
            return <NotFound/>
        } else {
            return (
                <div>{item.description}
                    {item.tag && <TagList tag={item.tag} id={item.id} removable={true}/>}
                    <TagInput id={item.id} />
                    <EmbeddedGist id={item.id} />
                </div>
            )
        }
    }
}

export default GistItem
