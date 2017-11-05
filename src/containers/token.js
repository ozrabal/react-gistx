import React, { Component } from 'react'
import {

  Redirect

} from 'react-router-dom'
class Token extends Component {

  componentWillMount(){
    //console.log('token component', this.props.match.params.token)
    localStorage.setItem('token', this.props.match.params.token)

  }

  render() {
    return <Redirect to={{
        pathname: '/'
      }}/>
  }
}
export default Token
