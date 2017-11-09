import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import { requestGists } from '../actions/gists'
import { ItemsList } from '../components/ItemsList'
import Gist from './gist'
import { Row, Column } from '../styled'

class Home extends Component {

    componentWillMount() {
        const { actions } = this.props
        actions.requestGists()
    }

    render() {
        const { gists } = this.props

        return (
            <Router>
                <Row>
                    <Column sm={4}>
                        <ItemsList items={gists} />
                    </Column>
                    <Column sm={8}>
                        <Route path="/gist/:id" component={Gist} />
                    </Column>
                </Row>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = Object.assign({}, {requestGists})
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
