
import React from 'react'
import { Link } from "react-router-dom"


export const IdOrder = ({ orderId }) => {

    return (
        <div className="mt-5">
            <p>Thanks you for shopping with us</p>
            <p>Your order is: {orderId}</p>
            <Link to={`/`}><button>Back to Products</button></Link>
        </div>
    )
}
