import "./App.css";
import { NavBar } from "./components/navbar/NavBar.js";
import "./components/navbar/NavBar.css";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";
import { ItemCount } from "./components/itemcount/ItemCount";
import "./components/itemlistcontainer/itemlist/Item.css";
import { ItemDetailContainer } from "./components/itemdetailcontainer/ItemDetailContainer.jsx";
import "./components/itemdetailcontainer/itemdetail/ItemDetail.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const onAdd = () => {
    console.log("agregue un producto al carro");
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <div className="App">
          <Route path="/">
            <ItemCount stock="9" initial="1" onAdd={onAdd} />
            <ItemListContainer />
          </Route>
          <Route path="/">
            <ItemDetailContainer />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;