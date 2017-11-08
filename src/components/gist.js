import React, { PureComponent } from 'react'
import TagInput from '../containers/tagInput'
import TagList from '../containers/tagList'
import EmbeddedGist from '../containers/gistembeded'


class GistItem extends PureComponent  {

    render() {
        const { item } = this.props
        if (!item) {
            return <p>Not found</p>
        } else {
            return (
                <div>{item.description}
                    {item.tag && <TagList tag={item.tag} id={item.id} removable={true}/>}
                    <TagInput id={item.id} />
                    <EmbeddedGist id={item.id}></EmbeddedGist>
                </div>
            )
        }
    }
}

export default GistItem
