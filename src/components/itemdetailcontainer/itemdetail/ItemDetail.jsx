import React from "react";

export const ItemDetail = ({ name, price, img, description }) => {
  return (
    <>
      <div className="card detailCard">
        <div className="row g-0">
          <div className="image">
            <img src={img} alt=""></img>
          </div>
          <div className="textDetail">
            <div className="card-body">
              <h1 className="card-title">{name}</h1>
              <p className="card-text">{description}</p>
              <p className="card-text">$ {price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};