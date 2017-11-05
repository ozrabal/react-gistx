import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { requestGist } from '../actions/gist'
import GistItem from '../components/gist'

class Gist extends PureComponent {


    componentDidMount() {
        const { requestGist, match: { params: { id } } } = this.props

        if (id) {
            requestGist(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        const { requestGist } = this.props

        if (this.props.match.params.id !== nextProps.match.params.id) {
            requestGist(nextProps.match.params.id)
        }
    }

    render() {
        const{ gist, isLoading } = this.props

        return (
            <div>
                {isLoading && <div>Loading</div>}
                {gist && <p>{gist.tag}</p>}
                {gist && <GistItem item={gist} tag={gist.tag}/>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestGist: (id) => dispatch(requestGist(id)),
        //addTag: (tag, id) => dispatch(addTag(tag, id))
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
