import React, { Component } from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'

import { Main, Blank } from '../layouts'
import { mainConfig, blankConfig, loginConfig, registerConfig } from '../config'

import Home from './Home'
import Inventory from './Inventory'
import Shop from './Shop'
import Tasks from './Tasks'
import User from './User'
import Canvas from './Canvas'
import Login from './Login'
import Register from './Register'
import Code from './Code'

const store = createStore(reducers)

export default class App extends Component {
  state = {
    login: false,
    email: 'leonweecs@gmail.com'
  }

  loginSuccess = email => this.setState({ login: true, email })

  logout = () => this.setState({ login: false })

  render() {
    const { login } = this.state
    return (
      <Provider store={store}>
        <BrowserRouter>
          {login ? (
            <Main
              config={mainConfig}
              email={this.state.email}
              logout={this.logout}
            >
              <Switch>
                <Route exact path="/pnd/home" render={() => <Home />} />
                <Route exact path="/pnd/canvas" render={() => <Canvas />} />
                <Route exact path="/pnd/tasks" render={() => <Tasks />} />
                <Route exact path="/pnd/inventory" render={() => <Inventory />} />
                <Route exact path="/pnd/shop" render={() => <Shop />} />
                <Route exact path="/pnd/user" render={() => <User />} />
                <Redirect to="/pnd/home" />
              </Switch>
            </Main>
          ) : (
              <Blank config={blankConfig}>
                <Switch>
                  <Route
                    exact
                    path="/pnd/login"
                    render={() => (
                      <Login
                        email={this.state.email}
                        loginSuccess={this.loginSuccess}
                        config={loginConfig}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/pnd/register"
                    render={() => <Register config={registerConfig} />}
                  />
                  <Route exact path="/pnd/code" render={() => <Code />} />
                  <Redirect to="/pnd/login" />
                </Switch>
              </Blank>
            )}
        </BrowserRouter>
      </Provider>
    )
  }
}
