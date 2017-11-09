import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { ThemeProvider } from 'styled-components'

import { Container, Nav, Header } from './styled'
import { theme } from './styled/theme'
import { getToken } from './utils'
import { validateToken } from './actions/auth'
import Home from './containers/home'
import About from './containers/about'
import Login from './containers/login'
import Auth from './containers/auth'
import Token from './containers/token'
import ErrorBoundary from './components/errorBoundary'

const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/auth',
    authenticatedSelector: () => {
        if (getToken()) {
            return true
        }
    },
    wrapperDisplayName: 'UserIsAuthenticated'
})

class App extends Component {

  componentDidMount() {
      const { validateToken } = this.props

      validateToken()
  }

  render() {
      return (<ErrorBoundary>
            <Router>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Header>
                            <Nav>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    {/* <li><<Link to="/auth">Login</Link></li> */}
                                </ul>
                            </Nav>
                        </Header>
                            <Route exact path="/" component={userIsAuthenticated(Home)}/>
                            <Route path="/gist/:id" component={userIsAuthenticated(Home)}/>
                            <Route exact path="/about" component={userIsAuthenticated(About)}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/auth" component={Auth}/>
                            <Route exact path="/token/:token" component={Token} />
                    </Container>
                </ThemeProvider>
            </Router>
          </ErrorBoundary>
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
    getToken: () => { dispatch(getToken())},
    validateToken: () => { dispatch(validateToken())}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
