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
    const waitingToast = toast.loading(
      'Adding product to your cart... Please wait.'
    );

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
      if (data.status === 'success') {
        console.log(data);

        toast.success('Product added to your cart successfully!');
        getProductToCart();
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          'Failed to add product to cart. Please try again.'
      );
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
      console.log(data.data.products);
      setCartInfo(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function removeProductFromCart({ rmProductID }) {
    const removeProduct = toast.loading(
      'Removing product from your cart... Please wait.'
    );
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
        toast.success('Product removed from your cart successfully!');
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          'Failed to remove product from cart. Please try again.'
      );
    } finally {
      toast.dismiss(removeProduct);
    }
  }
  async function clearAllCart() {
    const clearAll = toast.loading('Clearing your cart... Please wait.');
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
        toast.success('Your cart has been successfully cleared!');
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          'Failed to clear the cart. Please try again.'
      );
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
