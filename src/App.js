import './App.css';
import { Route } from 'wouter';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider>
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
          </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
