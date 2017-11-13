import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { requestGist } from '../actions/gist'
import GistItem from '../components/gist'

class Gist extends PureComponent {

    componentDidMount() {
        const { actions, match: { params: { id } } } = this.props

        if (id) {
            actions.requestGist(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        const { actions } = this.props

        if (this.props.match.params.id !== nextProps.match.params.id) {
            actions.requestGist(nextProps.match.params.id)
        }
    }

    render() {
        const{ gist, isLoading } = this.props

        return (
            <div>
                {gist && <GistItem item={gist} tag={gist.tag}/>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = Object.assign({}, {requestGist})
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        gist: state.gist.item,
        isLoading: state.gist.fetching,
        error: state.gist.error
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gist))
