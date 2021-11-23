import React from "react"
import { Link } from "react-router-dom"

export const Item = ({ coffee }) => {
    return (
        <>
            <div className="cards mt-5 mx-5">
                <div className="image">
                    <Link to={`/item/${coffee.id}`}><img src={coffee.pictureUrl} alt=""></img></Link>
                </div>
                <div className="text">
                    <h1 className="title">{coffee.title}</h1>
                    <h3 className="price">Price: ${coffee.price}</h3>
                </div>
            </div>
        </>
    )
}
