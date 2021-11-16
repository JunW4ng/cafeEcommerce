import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import { Link } from "react-router-dom"

export const ItemCount = ({ item, count, onIncrease, onDecrease, addItem }) => {

    const { cart } = useContext(CartContext)

    return (
        <>
            <div className="addRemoveButtons pt-2">
                <button onClick={() => onDecrease()}>-</button>
                <span className="px-2">{count}</span>
                <button onClick={() => onIncrease()}>+</button>
            </div>
            <br></br>
            <button onClick={() => addItem(item, count)}>Agregar al carro</button>
            <h5>Stock: {item.stock}</h5>
            <hr></hr>
            <button><Link to={`/cart`}>Go to cart ({cart.length})</Link></button>
        </>
    )
}