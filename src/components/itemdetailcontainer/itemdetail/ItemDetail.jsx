import React, { useContext } from "react";
import { useState } from "react";
import { ItemCount } from "../../itemcount/ItemCount";
import { CartContext } from "../../../contexts/cartContext";
import { Loader } from "../../loader/Loader";


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

  const { addItem } = useContext(CartContext);

  return (
    <>
      <div className="cardDetail rounded d-flex justify-content-center mt-5">
        {item ? (
          <div className="detailCard card shadow-lg">
            <div key={item.id}>
              <div>
                <img src={item.pictureUrl} alt=""></img>
              </div>
              <div className="detailName">
                <h1 className="mt-3">{item.name}</h1>
              </div>
              <div className="detailDescription">
                <h3>{item.description}</h3>
              </div>
              <div className="detailPrice">
                <h1 className="fs-3 mt-3">$ {item.price}</h1>
              </div>
              <div>
                <ItemCount
                  item={item}
                  count={count}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  addItem={addItem}
                />
              </div>
            </div>
          </div>
        ) : (
          <Loader/>
        )}
      </div>
    </>
  );
};
