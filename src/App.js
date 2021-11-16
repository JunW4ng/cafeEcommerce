import "./App.css";
import { NavBar } from "./components/navbar/NavBar.jsx";
import "./components/navbar/NavBar.css";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";
import "./components/itemlistcontainer/itemlist/Item.css";
import { ItemDetailContainer } from "./components/itemdetailcontainer/ItemDetailContainer.jsx";
import "./components/itemdetailcontainer/itemdetail/ItemDetail.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext"
import { Cart } from "./components/cart/Cart";
import "./components/cart/Cart.css"

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Switch>
          <div className="App">

            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

          </div>
        </Switch>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;