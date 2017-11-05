import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addTag } from '../actions/tags'

class TagInput extends PureComponent {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const { addTag, id } = this.props

        event.preventDefault()
        addTag(event.target.tags.value, id)
        event.target.tags.value = null
    }

    render() {

        return (
            <div>
                <form onSubmit={event => {this.handleClick(event)}}>
                    <input id="tags" type="text"/>
                    <button type="submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTag: (tag, id) => dispatch(addTag(tag, id))
    }
}

export default connect(null, mapDispatchToProps)(TagInput)
