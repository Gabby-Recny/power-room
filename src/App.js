import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Main from './Components/Search/Main'
import Header from './Components/Header/Header';
import Error from './Components/Error/Error';
import BathroomDetails from './Components/BathroomDetails/BathroomDetails';

const App = () => {


  return (
    <section className='App'>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path='/:id'
          render={( {match} ) => {
            return <BathroomDetails id={match.params.id} />
            }
          }>
        </Route>
        <Route exact path='/error' component={Error}/>
        <Redirect to='/error' />
      </Switch>
    </section>
  )
}

export default App;
