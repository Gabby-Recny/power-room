import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Main from './Components/Main/Main';

const App = () => {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route exact path="/error" component={ErrorPage} /> */}
      <Redirect to="/error" />
    </Switch>
  </div>
  );
}

export default App;
