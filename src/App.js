import './App.css';
import { Route } from 'wouter';

import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import Context from './context/StaticContext';

function App() {
  return (
    <div className="App">
      <section 
      className="App-content">
        <h1>App</h1>
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
      </section>
    </div>
  );
}

export default App;
