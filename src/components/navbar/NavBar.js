import { Link } from "react-router-dom"
import { CartWidget } from "../cartwidget/CartWidget"

export const NavBar = () => {
    return (
        <nav className="NavBarItems">
            <div className="logo">J | W</div>
            <ul className="nav-links">
                <li><Link to={`/`}>Store</Link></li>
                <li><Link to={`/detail`}>Detail</Link></li>
                <li><a href="https://www.google.com">Contact</a></li>
                <li><a href="https://www.google.com"><CartWidget /></a></li>
            </ul>
        </nav>
    )
}