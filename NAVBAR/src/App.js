
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Mensaje from './components/Mensaje/Mensaje';
import Vistas from './components/Vistas/Vistas';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="NEW ARRIVES"/>
    <ItemCount/>
    <Mensaje/>
    <Vistas/>
    </>
  );
}

export default App;
