import axios from 'axios';
import { createContext, useState } from 'react';
export const RelatedContext = createContext(0);

export default function RelatedProductsProvider({ children }) {
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [specificBrand, setSpecificBrand] = useState(null);

  async function getRalatedProduct({ categoryID }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryID}`,
        method: 'GET',
      };
      const { data } = await axios.request(options);
      //! console.log(data.data);
      setRelatedProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getSpecificBrand({ brandID }) {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/brands/${brandID}`
      );
      //! console.log(data.data);
      setSpecificBrand(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RelatedContext.Provider
      value={{
        getRalatedProduct,
        relatedProduct,
        getSpecificBrand,
        specificBrand,
      }}
    >
      {children}
    </RelatedContext.Provider>
  );
}
