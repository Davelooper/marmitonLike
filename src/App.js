import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './App/pages/Home'
import Recipe from './App/pages/Recipe';
import SearchRecipes from './App/pages/SearchRecipes';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/searchRecipes">
        <SearchRecipes />
      </Route>
      <Route path="/recipe">
        <Recipe />
      </Route>
    </Router>
  );
}

export default App;
