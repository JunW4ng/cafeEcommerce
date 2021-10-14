import { CartWidget } from "../cartwidget/CartWidget"

export const NavBar = () =>{
    return (
        <nav className = "NavBarItems">
            <div className="logo">J | W</div>
            <ul className="nav-links">
                <li><a href="https://www.google.com">Home</a></li>
                <li><a href="https://www.google.com">Tienda</a></li>
                <li><a href="https://www.google.com">Nosotros</a></li>
                <li><a href="https://www.google.com">Contacto</a></li>
                <li><a href="https://www.google.com"><CartWidget /></a></li>                
            </ul>
        </nav>
    )
}