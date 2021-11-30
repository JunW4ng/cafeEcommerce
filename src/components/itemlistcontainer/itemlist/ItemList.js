import React from "react";
import { Loader } from "../../loader/Loader";
import { Item } from "./Item";

export const MapeoLista = ({ listaCoffee }) => {
  return (
    <div>
      {listaCoffee
        ? listaCoffee.map((coffee) => <Item key={coffee.id} coffee={coffee} />)
        : < Loader />}
    </div>
  );
};
