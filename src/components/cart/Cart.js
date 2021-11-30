import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import { Link } from "react-router-dom"


export const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? (
                <div className="container text-center my-5 pb-4">
                    <p className="fs-1 mb-5">Cart is Empty</p>
                    <button className="btn border border-dark bg-dark text-white"><Link to={`/products`}>Back to Products</Link></button>
                </div>) : (
                <div className="cardCart container mb-3">
                    {cart.map((item) =>
                        <div className="row g-0 my-5 " key={item.id}>
                            <div className="col-md-4">
                                <Link to={`/item/${item.id}`}><img src={item.img} className="img-fluid rounded-start shadow-lg" alt="FotoProducto" /></Link>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title fs-1">{item.name}</h5>
                                    <p className="card-text fs-2">$ {item.price}</p>
                                    <p className="card-text fs-5">Cantidad: {item.quantity}</p>
                                    <button className="btn-sm shadow-sm" onClick={() => removeItem(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
                        <Link to={`/checkout`}><button className="btn-lg shadow bg-dark text-white border-0">Checkout</button></Link>
                    </div>
                </div>
            )}
        </>
    )
}