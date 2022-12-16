import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
const App = () => {
  return (
      <>
      <Navbar/>
      <ItemListContainer/>
      <ItemCount/>
      </>
  );
}

export default App;
