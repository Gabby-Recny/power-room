import './App.scss';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';

const App = () => {
  return (
    <main className='main-page non-binary-gradient'>
      <Header />
      <Search/>
    </main>
  );
}

export default App;
