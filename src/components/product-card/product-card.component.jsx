import { useContext } from "react";
import Button from "../button/button.component";
import "../product-card/product-card.styles.scss"
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ id, imageUrl, name, price }) => {

    const {addItemToCart} = useContext(CartContext);

  const handleAddToCart = () => {
    const productToAdd = {id,imageUrl,name,price};
    addItemToCart(productToAdd);
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="product" />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
