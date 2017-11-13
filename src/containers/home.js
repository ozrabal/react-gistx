import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import { requestGists } from '../actions/gists'
import { requestGist } from '../actions/gist'
import { ItemsList } from '../components/ItemsList'
import Gist from './gist'
import { Row, Column } from '../styled'
import { Loading } from  '../components/loading'

class Home extends Component {

    componentWillMount() {
        const { actions, } = this.props

        actions.requestGists()
    }

    componentWillUpdate() {
        const {actions, gists} = this.props

        if (gists) {
            actions.requestGist(gists[0].id)
        }
    }

    render() {
        const { gists } = this.props

        return (
            <Router>
                <Row>
                    <Column sm={4}>
                        {gists && <ItemsList items={gists} />}
                        {!gists && <Loading/>}
                    </Column>
                    <Column sm={8}>
                        <Route exact path="/" component={Gist} />
                        <Route exact path="/gist/:id" component={Gist} />
                    </Column>
                </Row>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = Object.assign({}, {requestGists, requestGist})
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

const mapStateToProps = (state) => {
    return {
        gists: state.gists.items,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
