import React from 'react';
import './Main.scss';
import Header from '../Header/Header';
import Search from '../Search/Search';

const Main = () => {
    return (
        <main className='main-page non-binary-gradient'>
          <Header />
          <Search/>
      </main>
    )
}

export default Main;