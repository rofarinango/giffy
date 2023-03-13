import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <section 
      className="App-content">
        <h1>App</h1>
          <Link to='/gif/rick sanchez'>Gifs de Rick</Link>
          <Link to='/gif/morty'>Gifs de Morty</Link>
          <Link to='/gif/doge'>Gifs de Doge</Link>
          <Route 
          component={ListOfGifs}
          path='/gif/:keyword'/>
      </section>
    </div>
  );
}

export default App;
