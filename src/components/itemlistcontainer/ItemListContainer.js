import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { MapeoLista } from "./itemlist/ItemList";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [itemsCoffeeBeans, setitemsCoffeeBeans] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const categoryQuery = categoryId ? query(collection(db, "catalogo"), where("category", "==", categoryId)) : collection(db, "catalogo")

        getDocs(categoryQuery).then((snapshot) => {
            setitemsCoffeeBeans(snapshot.docs.map((doc) => doc.data()))
        })
    }, [categoryId]);

    return (
        <MapeoLista listaCoffee={itemsCoffeeBeans} />
    )
};