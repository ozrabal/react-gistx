import React, { PureComponent } from 'react'
import TagInput from '../containers/tagInput'
import TagList from '../containers/tagList'
import EmbeddedGist from '../containers/embeded'


class GistItem extends PureComponent  {

    render() {
        const { item } = this.props
        if (!item) {
            return <p>Not found</p>
        } else {
            return (
                <div>Gist: {item.description}
                    {item.tag && <TagList tag={item.tag} id={item.id}/>}
                    <TagInput id={item.id} />
                    <EmbeddedGist gist={item.id} ></EmbeddedGist>
                </div>
            )
        }
    }
}

export default GistItem
