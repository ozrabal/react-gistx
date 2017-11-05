import React, { Component } from 'react';
import { connect } from 'react-redux'

//import { getToken } from '../actions/auth'

class Login extends Component {

  componentDidMount(){

  }

  render() {
console.log('render',this.props.token)
    return (
      <div>
        login {this.props.token}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }

}

const mapDispatchToProps = dispatch => {
  return {
    // getToken: () => { dispatch(getToken())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
