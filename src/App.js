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
import { Footer } from "./components/footer/Footer";
import "./components/footer/Footer.css"
import { Checkout } from "./components/checkout/Checkout";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Switch>

            <Route exact path="/">
              <div className="listContainer">
                <ItemListContainer />
              </div>
            </Route>

            <Route exact path="/category/:categoryId">
              <div className="listContainer">
                <ItemListContainer />
              </div>
            </Route>

            <Route exact path="/item/:id">
              <div className="listDetailContainer container text-center">
                <ItemDetailContainer />
              </div>
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route exact path="/checkout">
              <Checkout />
            </Route>

          </Switch>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;