import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { MapeoLista } from "./itemlist/ItemList";
import { CoffeeProducts } from "../catalogue/Coffee";

export const ItemListContainer = () => {
    const [coffeeGrano, setCoffeeGrano] = useState(null);

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(CoffeeProducts)
            }, 2000);
        });

        task.then(
            (result) => {
                console.log(result);
                setCoffeeGrano(result);
            },
            (err) => {
                console.log("error: " + err);
            }
        ).catch((err) => {
            console.log("soy el catch: ", err);
        });
    }, []);

    return (
        <MapeoLista listaCoffee={coffeeGrano} />
    )
};