import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

class About extends Component {

    constructor(props) {
        super(props)
        console.log('props', this.props.match.path)
    }

    render() {

        return (
            <div>
                about
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About))
