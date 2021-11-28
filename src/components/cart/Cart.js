import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import { Link } from "react-router-dom"


export const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? (
                <div className="container text-center mt-5">
                    Cart is Empty
                    <br></br>
                    <button><Link to={`/`}>Back to Products</Link></button>
                </div>) : (
                <div className="cardCart container mb-3">
                    {cart.map((item) =>
                        <div className="row g-0 my-5" key={item.id}>
                            <div className="col-md-4">
                                <Link to={`/item/${item.id}`}><img src={item.img} className="img-fluid rounded-start" alt="FotoProducto" /></Link>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">$ {item.price}</p>
                                    <p className="card-text">Cantidad: {item.quantity}</p>
                                    <button onClick={() => removeItem(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
                        <Link to={`/checkout`}><button>Checkout</button></Link>
                    </div>
                </div>
            )}
        </>
    )
}