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

          <div className="btn-group">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </button>
            <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
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
          </div>

          <li className="nav-link">
            <a href="https://www.google.com/search?q=cafe+jw">Contact</a>
          </li>
          <li className="nav-link">
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

      {/* <nav className="navbar navbar-expand-lg navbar-light NavBarItems">
        <div className="container-fluid">
          <div className="logo">
            <Link to={`/`}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-link">
                <Link to={`/`}>Home</Link>
              </li>
              <li class="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">
                    <Link to={`/products`}>Sholl All</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to={`/category/Africa`}>Africa</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to={`/category/LATAM`}>LATAM</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to={`/category/V60`}>V60</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-link">
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
          </div>
        </div>
      </nav> */}
    </>
  );
};
