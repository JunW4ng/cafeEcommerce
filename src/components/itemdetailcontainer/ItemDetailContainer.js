import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { ItemDetail } from "./itemdetail/ItemDetail";

const detailCoffee = [{
    id: 1,
    name: 'Shyira',
    price: 5000,
    pictureUrl: 'https://cdn.shopify.com/s/files/1/0076/7823/0628/products/shyira-1000x1000px_1024x1024.jpg?v=1622692771',
    description: 'Cafe directo de Rwanda, Africa Oriental'
}]

const getItem = (setDetail) => {

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(detailCoffee)
        }, 2000);
    });
    task.then(
        (result) => {
            setDetail(result)
        },
        (err) => {
            console.log("error " + err)
        }
    )
}

export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(null);

    useEffect(() => {
        getItem(setDetail)
    }, []);

    return (
        <>
            {detail?.map(detail => < ItemDetail key={detail.id} item={detail} />)}
        </>
    )
}