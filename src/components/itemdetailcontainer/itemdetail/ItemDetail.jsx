import React, { useContext } from "react";
import { useState } from "react";
import { ItemCount } from "../../itemcount/ItemCount";
import { CartContext } from "../../../contexts/cartContext";
//import { ExtraButtons } from "../../itemcount/ExtraButtons";

export const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);

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
  /* const [flag, setFlag] = useState(false);

  const montarBotones = () => {
    if (count > 0) {
      console.log(`Se agregaron ${count}`);
      setFlag(true);
    }
  }; */

  const { addItem, removeItem, clearCart } = useContext(CartContext)

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
                item={item}
                count={count}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                addItem={addItem}
                removeItem={removeItem}
                clearCart={clearCart}
              />
            </div>
            {/* <div>{flag && <ExtraButtons quantity={count} />}</div> */}
          </div>
        ) : (
          "Cargando detalle..."
        )}
      </div>
    </>
  );
};