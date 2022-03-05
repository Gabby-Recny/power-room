import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Main from './Components/Search/Main'
import Header from './Components/Header/Header';
import Error from './Components/Error/Error';
import About from './Components/About/About';

const App = () => {

  return (
    <section className='App'>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path='/about' component={About} />
        {/* <Route exact path='/faq' component={FAQ} /> */}
        <Route exact path='/error' component={Error}/>
        <Redirect to='/error' />
      </Switch>
    </section>
  )
}

export default App;
