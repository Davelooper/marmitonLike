import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './App/pages/Home'
import Recipes from './App/pages/Recipes'

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/recipes">
        <Recipes />
      </Route>
    </Router>
  );
}

export default App;
