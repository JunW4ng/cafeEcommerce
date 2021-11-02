import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { MapeoLista } from "./itemlist/ItemList";
import { CoffeeProducts } from "../catalogue/Coffee";
import { useParams } from "react-router";

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [coffeeGrano, setCoffeeGrano] = useState(null);

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(CoffeeProducts)
            }, 2000);
        });

        task.then(
            (data) => {
                categoryId ?
                    setCoffeeGrano(data.filter((coffeeProducts) => coffeeProducts.category === categoryId)) : setCoffeeGrano(data)
            },
            (err) => {
                console.log("error: " + err);
            }
        ).catch((err) => {
            console.log("soy el catch: ", err);
        });
    }, [categoryId]);

    return (
        <MapeoLista listaCoffee={coffeeGrano} />
    )
};