import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import ResultsContainer from './Components/Results/ResultsContainer/ResultsContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/results/:postalCode"  
        render={({ match }) => {
          console.log('App', match.params.postalCode)
          return <ResultsContainer postalCode={match.params.postalCode} />
        }
      }></Route>
      </Switch>
  </div>
  );
}

export default App;
