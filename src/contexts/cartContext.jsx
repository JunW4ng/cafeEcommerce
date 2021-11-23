import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Agrega item con condicional que no deja agregar el mismo item al carro
  const addItem = (item, quantity) => {
    const product = {
      id: item.id,
      img: item.pictureUrl,
      name: item.title,
      price: item.price,
      quantity: quantity,
    };
    if (!isItemInCart(item.id)) {
      setCart([...cart, product]);
      return true;
    } else {
      return false;
    }
  };
  
  //Verifica si esta o no el item en el carro
  const isItemInCart = (id) => {
    const filteredCart = cart.filter((item) => item.id === id);
    const inCart = filteredCart.length === 0 ? false : true;
    return inCart;
  };

  //Remover un item del carro
  const removeItem = (item) => {
    const newItemArray = cart.filter((newItem) => newItem.id !== item.id);
    setCart(newItemArray);
  };

  //Remover todos los items del carro
  const clearCart = () => {
    setCart([]);
  };

  //Total de la compra
  const totalPrice = cart.reduce(
    (acumValue, currValue) => acumValue + currValue.price * currValue.quantity,0);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, removeItem, clearCart, isItemInCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};