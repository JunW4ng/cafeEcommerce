import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { ItemDetail } from "./itemdetail/ItemDetail";
import { CoffeeProducts } from "../catalogue/Coffee";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
  const { id } = useParams();
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
      .then((result) => setDetailProduct(result[id]))
      .catch((err) => console.log("error " + err));
  }, [id]);

  return (
    <>
      <ItemDetail item={detailProduct} />
    </>
  );
};
