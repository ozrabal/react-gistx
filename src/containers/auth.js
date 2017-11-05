import { Component } from 'react'

class Auth extends Component {

  componentWillMount() {
    console.log('redirect')
    window.location = 'http://localhost:9000/auth/github'
  }

  render() {
    return null
  }
}
export default Auth
