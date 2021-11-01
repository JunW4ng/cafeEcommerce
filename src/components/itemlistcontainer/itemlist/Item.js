import React from "react"
import { Link } from "react-router-dom"

export const Item = ({ coffee }) => {
    return (
        <>
            <div className="cards">
                <div className="image">
                    <Link to="/item/2"><img src={coffee.pictureUrl} alt=""></img></Link>
                </div>
                <div className="title">
                    <h1>{coffee.title}</h1>
                </div>
                <div className="title">
                    <h3>Price: ${coffee.price}</h3>
                </div>
            </div>
        </>
    )
}
