import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../moke-up data/shop-data.js"
import { writeDataToCollection } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({children}) => {
    const [products,setProducts] = useState(PRODUCTS);

    useEffect(()=>{
      // console.log(PRODUCTS)
      // writeDataToCollection("Categories" , PRODUCTS)
    },[])

    const value = {products}
    return (
      <ProductsContext.Provider value={value}>
        {children}
      </ProductsContext.Provider>
    );
}
