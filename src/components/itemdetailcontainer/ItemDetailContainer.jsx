import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { ItemDetail } from "./itemdetail/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const ref = doc(db, "catalogo", id);

    getDoc(ref).then((snapshot) => {
      if (snapshot.exists()) {
        setDetailProduct(snapshot.data());
      }
    });
  }, [id]);

  return (
    <>
      <ItemDetail item={detailProduct} />
    </>
  );
};
