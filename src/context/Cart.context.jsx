/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';
import toast from 'react-hot-toast';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(UserContext);
  const [cartInfo, setCartInfo] = useState(null);
  // const [numOfCartItems, setNumOfCartItems] = useState(0);
  async function addProductToCart({ productId }) {
    const waitingToast = toast.loading('Watting');
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/cart',
        method: 'POST',
        headers: {
          token,
        },
        data: {
          productId,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data.status === 'success') {
        toast.success(data.status);
        // setNumOfCartItems(data.numOfCartItems);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(waitingToast);
    }
  }
  async function getProductToCart() {
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/cart',
        method: 'GET',
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);
      setCartInfo(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function removeProductFromCart({ rmProductID }) {
    const removeProduct = toast.loading('watting ');
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${rmProductID}`,
        method: 'DELETE',
        headers: {
          token,
        },
      };

      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === 'success') {
        setCartInfo(data);
        toast.success(data.status);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(removeProduct);
    }
  }
  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        getProductToCart,
        cartInfo,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
