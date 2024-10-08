import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../context/shopContext"
import { useContext } from "react"
import './shop.styles.scss'

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return (
      <div className="products-container">
        {products.map(({ id, name, imageUrl, price }) => (
          <ProductCard key={id} id={id} imageUrl={imageUrl} price={price} name={name} />
        ))}
      </div>
    );
}

export default Shop