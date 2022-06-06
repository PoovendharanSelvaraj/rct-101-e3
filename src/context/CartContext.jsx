import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [add,setAdd]=useState(0);

  const adding=()=>{
    setAdd(add+1)
  }
  const remove = ()=>{
    setAdd(add-1)
  }
  return <CartContext.Provider value={{add,adding,remove}}>{children}</CartContext.Provider>;
};
