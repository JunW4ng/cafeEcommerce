
import React from 'react'
import { Link } from "react-router-dom"


export const IdOrder = ({ orderId }) => {

    return (
        <div className="my-5 container-fluid bg-grey">
            <p className="fs-4">Thanks you for shopping with us</p>
            <p className="fs-3">Your order is: {orderId}</p>
            <Link to={`/`}><button className="btn border-2 border-dark">Back to Home</button></Link>
        </div>
    )
}
