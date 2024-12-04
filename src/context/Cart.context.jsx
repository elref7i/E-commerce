/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';
import toast from 'react-hot-toast';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(UserContext);
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
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(waitingToast);
    }
  }
  return (
    <CartContext.Provider value={{ addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}
