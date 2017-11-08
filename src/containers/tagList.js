import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { TagButton } from '../components/tag'
import { Tags } from '../styled'
import { removeTag } from '../actions/tags'

class TagList extends PureComponent {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event, tag, gistId) {
        const { removeTag } = this.props

        event.preventDefault()
        removeTag(tag, gistId)
    }

    render() {
        const { id, tag, removable } = this.props

        const tags = tag.map((item, index) =>
          <li key={index}><TagButton tag={item} remove={removable} onRemoveClick={(event) => this.handleClick(event, item, id)} /></li>
        )
        return <Tags>{tags}</Tags>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTag: (tag, id) => dispatch(removeTag(tag, id))
    }
}

export default connect(null, mapDispatchToProps)(TagList)
