import React from "react"
import { Link } from "react-router-dom"
import { CartWidget } from "../cartwidget/CartWidget"
import logo from "../../images/logo.png"

export const NavBar = () => {
    return (
        <>
        <nav className="NavBarItems">

            <div className="logo">
                <Link to={`/`}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <ul className="nav-links">
                <li><Link to={`/category/Africa`}>Africa</Link></li>
                <li><Link to={`/category/LATAM`}>LATAM</Link></li>
                <li><a href="https://www.google.com">Contact</a></li>
                <li><a href="https://www.google.com"><CartWidget /></a></li>
            </ul>

        </nav>
        </>
    )
}