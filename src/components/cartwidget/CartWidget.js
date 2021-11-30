import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';


export const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <>
            <button type="button" className="btn cart-button btn-primary position-relative border-1 border-dark text-dark">
                <FontAwesomeIcon icon={faShoppingCart} />

                {cart.length ? (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {cart.length}
                        <span className="visually-hidden">New alerts</span>
                    </span>
                ) : ('')}

            </button>
        </>
    )
}