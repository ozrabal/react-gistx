import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Item } from '../components/Item'
import { List } from '../styled'

class ItemsList extends Component {

    render() {
        console.log('itemslist',this.props.match.params.tag)
        const { items } = this.props
        let list = null
        if (items) {
            list = items.map((gist) =>
                <Item key={gist.id} description={gist.description} id={gist.id} created_at={gist.created_at} tag={gist.tag}/*onClickItem={onClickItem} *//>
            )
        }

        return <List>{list}</List>
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.gists.items,
    }
}

export default withRouter(connect(mapStateToProps)(ItemsList))
