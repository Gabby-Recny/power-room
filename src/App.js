import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import ResultsContainer from './Components/Results/ResultsContainer/ResultsContainer';
import Error from './Components/Error/Error';
import BathroomDetails from './Components/BathroomDetails/BathroomDetails';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path='/results/:postalCode' 
          render={( {match} ) => {
            return <ResultsContainer postalCode={match.params.postalCode} />
          }} />
        <Route exact path="/error" component={Error}></Route>
      </Switch>
    </div>
  )
}

export default App;
