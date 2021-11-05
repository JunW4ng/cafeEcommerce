import React from "react";
import { useState } from "react";
import { ExtraButtons } from "../../itemcount/ExtraButtons";
import { ItemCount } from "../../itemcount/ItemCount";

export const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
  };

  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //mostrar y ocultar boton
  const [flag, setFlag] = useState(false);

  const montarBotones = () => {
    if (count > 0) {
      console.log(`Se agregaron ${count}`);
      setFlag(true);
    }
  };

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
              <ItemCount
                count={count}
                stock={item.stock}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                postAdd={montarBotones}
              />
            </div>
            <div>
              {flag && <ExtraButtons quantity={count}/>}
              </div>
          </div>
        ) : (
          "Cargando detalle..."
        )}
      </div>
    </>
  );
};
