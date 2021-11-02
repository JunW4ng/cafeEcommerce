import "./App.css";
import { NavBar } from "./components/navbar/NavBar.js";
import "./components/navbar/NavBar.css";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";
import "./components/itemlistcontainer/itemlist/Item.css";
import { ItemDetailContainer } from "./components/itemdetailcontainer/ItemDetailContainer.jsx";
import "./components/itemdetailcontainer/itemdetail/ItemDetail.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <div className="App">

          <Route exact path="/">
            <p>Haz click en alguna imagen para ver el detalle del producto</p>
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

        </div>
      </Switch>

    </BrowserRouter>
  );
}

export default App;