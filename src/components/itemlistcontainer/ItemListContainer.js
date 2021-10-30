import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { MapeoLista } from "./itemlist/ItemList";

const coffee = [
    {
        id: 1,
        title: 'Shyira',
        price: 5000,
        pictureUrl: 'https://cdn.shopify.com/s/files/1/0076/7823/0628/products/shyira-1000x1000px_1024x1024.jpg?v=1622692771',
        description: 'Cafe directo de Rwanda, Africa Oriental'
    },
    {
        id: 2,
        title: 'Colombia',
        price: 5000,
        pictureUrl: 'https://cdn.shopify.com/s/files/1/0076/7823/0628/products/WhatsAppImage2021-07-08at13.26.51_1024x1024.jpg?v=1626914661',
        description: 'Cafe directo de Rwanda, Africa Oriental'
    },
    {
        id: 3,
        title: 'Garca',
        price: 5000,
        pictureUrl: 'https://cdn.shopify.com/s/files/1/0076/7823/0628/products/GARCA-1000x1000px_1024x1024.jpg?v=1622692619',
        description: 'Cafe directo de Rwanda, Africa Oriental'
    },
    {
        id: 4,
        title: 'Layo Taraga',
        price: 5000,
        pictureUrl: 'https://cdn.shopify.com/s/files/1/0076/7823/0628/products/WhatsAppImage2021-08-04at13.42.59_1024x1024.jpg?v=1633317654',
        description: 'Cafe directo de Rwanda, Africa Oriental'
    }];

export const ItemListContainer = () => {
    const [coffeeGrano, setCoffeeGrano] = useState(null);

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(coffee)
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