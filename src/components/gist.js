import React, { PureComponent } from 'react'
import EmbeddedGist from '../containers/gistembeded'
import { NotFound } from '../components/notFound'

class GistItem extends PureComponent  {

    render() {
        const { item } = this.props
        if (!item) {
            return <NotFound/>
        } else {
            return <EmbeddedGist item={item}/>
        }
    }
}

export default GistItem
