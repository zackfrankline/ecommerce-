import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ id, imageUrl, name, price, quantity }) => {
  const { increaseCartItemQuantity, decreaseCartItemQuantity, deleteCartItem } =
    useContext(CartContext);

  const handleCartItemQuantityIncrease = () => {
    increaseCartItemQuantity({ id, imageUrl, name, price, quantity });
  };

  const handleCartItemQuantityDecrease = () => {
    decreaseCartItemQuantity({ id, imageUrl, name, price, quantity });
  };

  const handleDeleteCartItem = () => {
    deleteCartItem({ id, imageUrl, name, price, quantity });
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={handleCartItemQuantityDecrease}>&lt;</div>
        {quantity}
        <div onClick={handleCartItemQuantityIncrease}> &gt;</div>
      </span>
      <span className="price">${price}</span>
      <div onClick={handleDeleteCartItem}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
