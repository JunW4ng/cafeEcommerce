import React from "react";
import { ItemCount } from "../../itemcount/ItemCount";

const onAdd = () => {
  console.log(`Se agrego un item al carro`);
};
export const ItemDetail = ({ item }) => {

  return (
    <>
      <div className="detailCard card">
        {item ? (
          <div key={item.id}>
            <div>
              <img src={item.pictureUrl} alt=""></img>
            </div>
            <div className="detailName">
              <h1>{item.name}</h1>
            </div>
            <div className="detailPrice">
              <h1>$ {item.price}</h1>
            </div>
            <div className="detailDescription">
              <h3>{item.description}</h3>
            </div>
            <div>
              <ItemCount stock={item.stock} initial="1" onAdd={onAdd}/>
            </div>
          </div>
        ) : (
          "Cargando detalle..."
        )}
      </div>
    </>
  );
};
