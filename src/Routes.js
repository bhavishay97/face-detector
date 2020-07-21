import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/User/Register';
import Login from './components/User/Login';
import App from './App';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  );
}

export default Routes;
