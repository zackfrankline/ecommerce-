import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/logo/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
