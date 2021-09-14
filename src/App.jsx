import './scss/main.scss';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
    <div className="home">
        <NavBar />
        {/* <ItemListContainer 
          saludo="New & Trending"
        /> */}
        <ItemDetailContainer />
    </div>
  );
}

export default App;
