import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

/*
    productToAdd ={ 
        id:1,
        img:,
        name,
        price,


    }

    cartItems = [
        {
            id:1,
            img,
            name,
            price,
            quanitity
        }
    ]
*/


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    
    
    const addCartItem = (cartItems, productToAdd) => {

      const existsCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
      );

      if (existsCartItem) {
        return (cartItems.map((cartItem) =>
          cartItem.id === existsCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      }
      return [...cartItems, { ...productToAdd, quantity: 1 }];
    };


  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  console.log(cartItems)

  const value = { isCartOpen, setIsCartOpen, addItemToCart,cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
