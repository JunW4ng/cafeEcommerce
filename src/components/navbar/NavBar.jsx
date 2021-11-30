import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../cartwidget/CartWidget";
import logo from "../../images/logo.png";

export const NavBar = () => {
  return (
    <>
    <div className="miniBar bg-dark text-white">
      <p>Free shipping on coffee and all orders of $30,000 or more. <Link to={`/products`} className="shopNow">Shop Now</Link></p> 
    </div>
      <nav className="NavBarItems navbar container-fluid">
        <div className="logo">
          <Link to={`/`}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li className="nav-link">
            <Link to={`/`}>Home</Link>
          </li>

          <li className="btn-group nav-links">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </button>
            <ul
              className="dropdown-menu text-center"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <Link to={`/products`}>Sholl All</Link>
              </li>
              <li>
                <Link to={`/category/Africa`}>Africa</Link>
              </li>
              <li>
                <Link to={`/category/LATAM`}>LATAM</Link>
              </li>
              <li>
                <Link to={`/category/V60`}>V60</Link>
              </li>
            </ul>
          </li>
          <li className="nav-links">
            <Link to={`/cart`}>
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
