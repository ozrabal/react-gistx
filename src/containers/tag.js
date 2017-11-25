import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { requestGists, filterByTag } from '../actions/gists'
import { requestGist } from '../actions/gist'
import { ItemsList } from '../components/ItemsList'
import Gist from './gist'
import { Row, Column } from '../styled'

import { Tags } from '../components/tags'

class Tag extends Component {

    componentDidMount() {
        const { actions, gists,currentTag,  match: { params: { tag } } } = this.props

        actions.requestGists()
        if(gists) {
            actions.filterByTag( tag)
        }
    }

    componentWillReceiveProps(nextProps) {
        const {actions, gists,gist,currentTag,  match: { params: { tag } } } = this.props

        if (tag !== nextProps.match.params.tag) {

            actions.filterByTag( nextProps.match.params.tag)
        }
    }

    /**
     * Render items list
     * @return {ReactElement} markup
     */
    renderList() {
        const {gists, bytag, match: { params: { tag } }} = this.props

        if (tag) {
            return <ItemsList items={bytag} />
        }
        return <ItemsList items={gists} />
    }

    render() {
        const { gists, tags,bytag, match: { params: { tag } } } = this.props

        return (
            <div>
                TAG
                <Row>
                    <Column sm={12}>
                        {tags.all && <Tags tags={tags.all} />}
                    </Column>
                </Row>
                <Row>
                    <Column sm={4}>
                        { this.renderList() }
                    </Column>
                    <Column sm={8}>
                        {/*<Gist/>*/}
                        <Route exact path="/gist/:id" component={(Gist)}/>
                    </Column>
                </Row>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = Object.assign({}, {requestGists, requestGist, filterByTag})
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

const mapStateToProps = (state) => {
    return {
        gists: state.gists.items,
        tags: state.tags,
        bytag: state.gists.bytag,
        gist: state.gist.item,
        currentTag: state.gists.currentTag,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tag))
