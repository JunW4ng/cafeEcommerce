import React from "react";
import { Item } from "./Item";

export const MapeoLista = ({ listaCoffee }) => {
    return (
        <div >
            {listaCoffee?.map(coffee => <Item key={coffee.id} coffee={coffee} />)}
        </div>
    )
}