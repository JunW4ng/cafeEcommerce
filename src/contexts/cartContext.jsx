import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const removeItem = (item) => {
    const newItemArray = cart.filter((newItem) => newItem.id !== item.id);
    setCart(newItemArray);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isItemInCart = (id) => {
    const filteredCart = cart.filter((item) => item.id === id);
    const inCart = filteredCart.length === 0 ? false : true;
    return inCart;
  };

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