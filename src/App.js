import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Search from './Components/Search/Search';
import Main from './Components/Search/Main'
import Header from './Components/Header/Header';
import ResultsContainer from './Components/Results/ResultsContainer/ResultsContainer';
import Error from './Components/Error/Error';
import BathroomDetails from './Components/BathroomDetails/BathroomDetails';
import Results from './Components/Results/ResultsContainer/Results';

const App = () => {


  return (
    <section className='App'>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/" component={Results} /> */}
        {/* <Route exact path='/' component={Results} /> */}
        {/* <Route path='/:postalCode' 
          render={( {match} ) => {
            return <ResultsContainer postalCode={match.params.postalCode} />
          }} />
        <Route exact path="/error" component={Error}></Route> */}
        {/* <Route path='/:postalCode/:id'
          render={( {match} ) => {
            return <BathroomDetails postalCode={} id={} />
          }} */}
      </Switch>
    </section>
  )
}

export default App;
