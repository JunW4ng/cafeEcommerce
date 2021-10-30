import React from "react";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="card detailCard">
        <div className="row g-0">
          <div className="image">
            <img src={item.pictureUrl} alt=""></img>
          </div>
          <div className="textDetail">
            <div className="card-body">
              <h1 className="card-title">{item.name}</h1>
              <p className="card-text">
                {item.description}
              </p>
              <p className="card-text">
                $ {item.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};