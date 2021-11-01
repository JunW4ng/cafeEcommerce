import React from "react";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="detailCard card">
        {
        item?
          <div key={item.id}>
            <div>
              <img src={item.pictureUrl} alt=""></img>
            </div>
            <div className="detailName">
              <h1>{item.name}</h1>
            </div>
            <div className="detailPrice">
              <h2>$ {item.price}</h2>
            </div>
            <div className="detailDescription">
              <h4>{item.description}</h4>
            </div>
          </div>
          : "Espera un momento"
          }
      </div>
    </>
  );
};
