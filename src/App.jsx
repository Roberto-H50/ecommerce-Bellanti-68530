import './App.css';

/*import CounterComponent from './components/CounterComponent';*/
import NavBar from './components/layouts/navbar/NavBar';
import ItemListContainer from './components/pages/ItemListContainer';
/* import TitleComponent from './components/TitleComponent'; */

function App() {
  return (
    <>
      {/* <TitleComponent texto="Deportes" color="red" />
      <TitleComponent texto="Espectaculos" color="green" />
      <TitleComponent texto="Viajes" color="blue" />
      <TitleComponent texto="Politica" color="orange" /> */}

      <NavBar />
      <ItemListContainer />
    
    </>
  );
}



export default App
