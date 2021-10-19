import './App.css';
import { NavBar } from './components/navbar/NavBar.js';
import './components/navbar/NavBar.css';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
import { ItemCount } from './components/itemcount/ItemCount';


function App() {
  return (
    
    <div className="App">
  
      <NavBar />
      <ItemListContainer greeting='HOLA MUNDO' />
      <ItemCount stock='9' initial='1'/>

      <header className='App-header'>
      <h1>Proximamente mas cosas!</h1>
      </header>
    </div>    
  )
}

export default App;
 