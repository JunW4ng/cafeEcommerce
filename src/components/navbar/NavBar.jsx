import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../cartwidget/CartWidget";
import logo from "../../images/logo.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export const NavBar = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="NavBarItems">
        <div className="logo">
          <Link to={`/`}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to={`/category/Africa`}>Africa</Link>
          </li>
          <li>
            <Link to={`/category/LATAM`}>LATAM</Link>
          </li>
          <li>
            <a href="https://www.google.com/search?q=cafe+jw">Contact</a>
          </li>
          <li>
            <Link to={`/cart`}>
              <CartWidget />
            </Link>
          </li>
          {cart.length ? (
            <Link to={`/cart`}>
              <button className="badge bg-dark">{cart.length}</button>
            </Link>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
};
