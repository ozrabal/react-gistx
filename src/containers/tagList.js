import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { TagButton } from '../components/tag'
import { Tags } from '../styled'
//import { detachTag } from '../actions/gist'
import { removeTag } from '../actions/tags'

class TagList extends PureComponent {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event, tag, gistId) {
        const { removeTag, id } = this.props

        event.preventDefault()
        removeTag(tag, gistId)
        //detachTag(tag, gistId)
    }

    render() {
        const { id, tag } = this.props

        const tags = tag.map((item, index) =>
          <li key={index}><TagButton tag={item} onRemoveClick={(event) => this.handleClick(event, item, id)} /></li>
        )
        return <Tags>{tags}</Tags>
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        //detachTag: (tag, id) => dispatch(detachTag(tag, id)),
        removeTag: (tag, id) => dispatch(removeTag(tag, id))
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList)
