import './App.css';
import { Route } from 'wouter';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <div className="App">
      <section 
      className="App-content">
        <h1>Giffy</h1>
        <GifsContextProvider>
            <Route 
              component={Home}
              path='/'
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path='/gif/:id'
            />
            <Route
              component={() => <h1>404 ERROR :(</h1>}
              path='/404'
            />
          </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
