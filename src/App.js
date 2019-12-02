import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home {...props} />} />
        <Route path="/login" render={() => <Login {...props} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
