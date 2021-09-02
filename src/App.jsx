import './scss/main.scss';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'


function App() {
  return (
    <div className="home">
        <NavBar />
        <ItemListContainer />
    </div>
  );
}

export default App;
