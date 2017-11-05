import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import { requestGists } from '../actions/gists'
import { requestGist } from '../actions/gist'
import { ItemsList } from '../components/ItemsList'
import Gist from './gist'
import {Row, Column } from '../styled'

class Home extends Component {

    componentWillMount() {
        const { requestGists } = this.props
        requestGists()
    }

    render() {
        const { gists } = this.props

        return (
            <Router>
                <Row>
                    <Column>
                        <ItemsList items={gists} />
                    </Column>
                    <Column>
                        <Route path="/gist/:id" component={Gist} />
                    </Column>
                </Row>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestGists: () => dispatch(requestGists()),
        requestGist: (id) => dispatch(requestGist(id)),
    }
}

const mapStateToProps = (state) => {
    return {
        gists: state.gists.items,
        gist: state.gist.item,
        token: state.auth.token,
        error: state.gists.error
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
