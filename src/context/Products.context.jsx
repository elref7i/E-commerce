/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useState } from 'react';

export const ProductsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [searchedData, setSearchedData] = useState(null);
  const [status, setStatus] = useState('products'.toLowerCase());

  async function getData() {
    const [products, sortedHProducts, sortedLProducts] = await Promise.all([
      axios.get('https://ecommerce.routemisr.com/api/v1/products'),
      axios.get('https://ecommerce.routemisr.com/api/v1/products?sort=-price'),
      axios.get('https://ecommerce.routemisr.com/api/v1/products?sort=price'),
    ]);
    return {
      products: products.data,
      sortedHProducts: sortedHProducts.data,
      sortedLProducts: sortedLProducts.data,
    };
  }

  let { data, isLoading } = useQuery({
    queryKey: ['homeProducts'],
    queryFn: getData,
    refetchOnMount: false,
  });
  console.log(data);

  function searchProducts(value) {
    console.log(value);
    if (data?.products?.data) {
      const productFilter = data.products.data.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );

      setSearchedData(productFilter);
      setStatus('search');
      console.log(productFilter);
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        data,
        isLoading,
        searchedData,
        status,
        searchProducts,
        setStatus,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
