import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { Router, Route, Redirect, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { LogIn, SignUp, Rooms, Home } from 'components';
import { MainLayout, LoggedInLayout } from 'components/layouts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="QU Res Life" />
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
          <Route component={MainLayout}>
            <Route path='/' component={Home} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />

            <Route component={LoggedInLayout} >
              <Redirect from='/' to='/rooms' />
              <Route path='/rooms' component={Rooms} />
            </Route>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
