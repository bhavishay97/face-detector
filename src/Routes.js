import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Logout from './components/User/Logout';
import App from './App';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  );
}

export default Routes;
