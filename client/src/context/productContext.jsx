import React, { Children, createContext } from 'react';
import { useState } from 'react';
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const [totalCart,setTotalCart]=useState([]);
  //   console.log(cart);
  const [cartValue, setCartValue] = useState(true);
  var arr=[];
  const handleCart = (cartItem) => {
    setCart(cartItem);
    setTotalCart([...totalCart,cartItem]);
    setCartValue(false);
  };
  console.log(totalCart)
  const handleCartValue = (value) => {
    setCartValue(value);
  };
  return (
    <ProductContext.Provider
      value={{ handleCart, handleCartValue, cartValue, cart, totalCart}}
    >
      {children}
    </ProductContext.Provider>
  );
};
