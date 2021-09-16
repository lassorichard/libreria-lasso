import './scss/main.scss';
import { NavBar } from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category/:categoryId" component={ItemListContainer} />
          <Route exact path="/product/:itemId" component={ItemDetailContainer} />
          <Route  path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
