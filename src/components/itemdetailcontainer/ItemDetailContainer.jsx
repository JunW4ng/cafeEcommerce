import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { ItemDetail } from "./itemdetail/ItemDetail";
import { CoffeeProducts } from "../catalogue/Coffee";

export const ItemDetailContainer = () => {
  
  const [detailProduct, setDetailProduct] = useState(null);
  
  const getItem = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem(CoffeeProducts)
      .then((result) => setDetailProduct(result[0]))
      .catch((err) => console.log("error " + err));
  }, []);

  return (
    <>
      <ItemDetail item={detailProduct} />
    </>
  );
};
