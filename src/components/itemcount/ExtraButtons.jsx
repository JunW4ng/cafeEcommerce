import React from "react"
import { Link } from "react-router-dom";

export const ExtraButtons = ({quantity}) => {
  return (
      <>
      <p>Acabas de agregar {quantity}</p>
      <button><Link to = {`/`}>Seguir Compando</Link></button>
      <button><Link to = {`/cart`}>Ir al Carrito</Link></button>
      </>
  )
};
