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
        getProductToCart();
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
      // console.log(data);
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
      // console.log(data);
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
  async function clearAllCart() {
    const clearAll = toast.loading('Watting');
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/cart',
        method: 'DELETE',
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      // console.log(data);
      if (data.message === 'success') {
        setCartInfo({
          numOfCartItems: 0,
        });
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.data.response.message);
    } finally {
      toast.dismiss(clearAll);
    }
  }

  async function updateProductCount({ productID, count }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${productID}`,
        method: 'PUT',
        headers: {
          token,
        },
        data: {
          count,
        },
      };
      let { data } = await axios.request(options);
      // console.log(data);
      if (data.status === 'success') {
        setCartInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // function increaseCount() {
  //   setNumberCount()
  // }
  // function decreaseCount(){

  // }
  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        getProductToCart,
        removeProductFromCart,
        clearAllCart,
        updateProductCount,
        cartInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
