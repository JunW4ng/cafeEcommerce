import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import { Link } from "react-router-dom"

export const ItemCount = ({ item, count, onIncrease, onDecrease, addItem }) => {

    const { cart } = useContext(CartContext)

    return (
        <>
            <div className="addRemoveButtons pt-2">
                <button className="btn btn-outline-dark fs-5" onClick={() => onDecrease()}>-</button>
                <span className="px-4 fs-5">{count}</span>
                <button className="btn btn-outline-dark fs-5" onClick={() => onIncrease()}>+</button>
            </div>
            <br></br>
            <button className="btn btn-outline-dark mb-3" onClick={() => addItem(item, count)}>Agregar al carro</button>
            <h5>Stock: {item.stock}</h5>
            <hr></hr>
            <div className="mb-3">
                <button className="btn btn-outline-dark"><Link to={`/cart`}>Go to cart ({cart.length})</Link></button>
            </div>
        </>
    )
}