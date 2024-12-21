/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useState } from 'react';

export const ProductsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [searchedData, setSearchedData] = useState(null);
  const [status, setStatus] = useState('products'.toLowerCase());

  async function getData() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  let { data, isLoading } = useQuery({
    queryKey: ['homeProuducts'],
    queryFn: getData,
    refetchOnMount: false,
  });

  function searchProducts(value) {
    console.log(value);
    const productFilter = data.data.data.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchedData(productFilter);
    setStatus('search');
    console.log(productFilter);
  }

  return (
    <ProductsContext.Provider
      value={{ data, isLoading, searchedData, status, searchProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
