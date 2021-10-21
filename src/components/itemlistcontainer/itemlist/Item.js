import React from "react"

export const Item = ({coffee}) => {
    return (
        <>
            <div className="cards">
                <div className="image">
                    <img src={coffee.pictureUrl} alt=""></img>
                </div>
                <div className="title">
                    <h1>{coffee.title}</h1>
                </div>
                <div className="title">
                    <h3>Precio: ${coffee.price}</h3>
                </div>
                <div className="description">
                    <p>{coffee.description}</p>
                </div>
            </div>
        </>
    )
}
