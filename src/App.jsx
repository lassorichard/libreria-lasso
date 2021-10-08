import './scss/main.scss';
import { NavBar } from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:categoryId" component={ItemListContainer} />
            <Route exact path="/product/:itemId" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
