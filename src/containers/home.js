import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { requestGists, filterByTag } from '../actions/gists'
import { requestGist } from '../actions/gist'
import ItemsList from '../containers/ItemsList'
import ByTagList from '../containers/ByTagList'
import Gist from './gist'
import { Row, Column } from '../styled'

import { Tags } from '../components/tags'

class Home extends Component {

    componentDidMount() {
        const { actions, gists,  match: { path } } = this.props

        actions.requestGists()
    }

    componentWillReceiveProps(nextProps) {
        const {actions, gists,gist,  match: { params: { tag } } } = this.props

        if (nextProps.match.params.tag !== tag) {
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
                <Row>
                    <Column sm={12}>
                        {tags.all && <Tags tags={tags.all} />}
                    </Column>
                </Row>
                <Row>
                    <Column sm={4}>
                        { this.renderList() }

                        { /*<Route exact path="/tag/:tag" component={ByTagList} /> */}
                        { /*<Route path="/" component={ItemsList} /> */}
                        { /*tag && <h4>Marked as {tag}</h4> */}
                        { /*tag && bytag && <ItemsList items={bytag} filter={tag}/> */}
                        {/*!tag && gists && <ItemsList items={gists} filter={tag}/> */}
                        {/* !gists && <Loading/> */ }
                    </Column>
                    <Column sm={8}>
                        <Gist/>
                        {/*<Route path="/gist/:id" component={Gist} /> */}
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
        gist: state.gist.item
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
