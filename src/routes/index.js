import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../component/todos';
import SignIn from '../component/signIn';
import SignUp from '../component/SignUp';
import PrivateRoute from './PrivateRoute';


class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={SignIn} path="/" />
          <Route component={SignIn} path="/login" exact />
          <Route component={SignUp} path="/signup" exact />
          <PrivateRoute component={Home} path="/home" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;