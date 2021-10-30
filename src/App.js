import './App.css';
import { NavBar } from './components/navbar/NavBar.js';
import './components/navbar/NavBar.css';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
import { ItemCount } from './components/itemcount/ItemCount';
import './components/itemlistcontainer/itemlist/Item.css'
import { ItemDetailContainer } from './components/itemdetailcontainer/ItemDetailContainer';
import './components/itemdetailcontainer/itemdetail/ItemDetail.css'

function App() {

  const onAdd = () => {
    console.log('agregue un producto al carro')
  }

  return (

    <div className="App">
      <NavBar />
      <ItemCount stock='9' initial='1' onAdd={onAdd}/>
      <ItemListContainer />
      <ItemDetailContainer/>
      <header className='App-header'>
        <h5>Proximamente mas cosas!</h5>
      </header>
    </div>
  )
}

export default App;
