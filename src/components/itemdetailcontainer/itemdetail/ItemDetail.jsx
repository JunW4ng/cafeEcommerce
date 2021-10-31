import React from "react";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="detailCard card">
        {item?.map((detail) => (
          <div key={detail.id}>
            <div>
              <img src={detail.pictureUrl} alt=""></img>
            </div>
            <div className="detailName">
              <h1>{detail.name}</h1>
            </div>
            <div className="detailPrice">
              <h2>$ {detail.price}</h2>
            </div>
            <div className="detailDescription">
              <h4>{detail.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
