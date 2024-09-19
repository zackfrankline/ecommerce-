import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  increaseCartItemQuantity: () => {},
  decreaseCartItemQuantity: () => {},
  deleteCartItem: () => {},
  cartCount: 0,
  totalCartPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCartPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  const addCartItem = (cartItems, productToAdd) => {
    const existsCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existsCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === existsCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  const increaseItemQuantity = (cartItems, productQuantityToChange) => {
    return cartItems.map((cartItem) =>
      cartItem.id === productQuantityToChange.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  };

  const decreaseItemQuantity = (cartItems, productQuantityToChange) => {
    if (productQuantityToChange.quantity === 1) {
      return deleteItemFromCart(cartItems, productQuantityToChange);
    }

    return cartItems.map((cartItem) =>
      cartItem.id === productQuantityToChange.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  const deleteItemFromCart = (cartItems, productToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const increaseCartItemQuantity = (productQuantityToChange) => {
    setCartItems(increaseItemQuantity(cartItems, productQuantityToChange));
  };

  const decreaseCartItemQuantity = (productQuantityToChange) => {
    setCartItems(decreaseItemQuantity(cartItems, productQuantityToChange));
  };

  const deleteCartItem = (productToDelete) => {
    setCartItems(deleteItemFromCart(cartItems, productToDelete));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    deleteCartItem,
    totalCartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
