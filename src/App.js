import './App.css';
import { NavBar } from './components/navbar/NavBar.js';
import './components/navbar/NavBar.css';
import { useState } from 'react';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';


function App() {

  return (
    
    <div className="App">
  
      <NavBar />
      <ItemListContainer greeting='HOLA MUNDO' />

      <header className='App-header'>
      <h1>Proximamente mas cosas!</h1>
      </header>

    </div>
  )
}

export default App;
 