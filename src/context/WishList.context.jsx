import { createContext, useContext, useState } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';
import toast from 'react-hot-toast';

export const WishListContext = createContext(null);

export default function WhishListProvider({ children }) {
  const { token } = useContext(UserContext);
  const [productWishlist, setProductWishlist] = useState(null);

  async function addProuductWishList({ productId }) {
    const toastload = toast.loading('Watting');
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/wishlist',
        method: 'POST',
        headers: {
          token,
        },
        data: {
          productId,
        },
      };
      let { data } = await axios.request(options);
      if (data.status === 'success') {
        toast.success(data.status);
        console.log(data);
        getLoggedUserWishlist();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.data.response.message);
    } finally {
      toast.dismiss(toastload);
    }
  }
  async function getLoggedUserWishlist() {
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/wishlist',
        method: 'GET',
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      setProductWishlist(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <WishListContext.Provider
      value={{ addProuductWishList, getLoggedUserWishlist, productWishlist }}
    >
      {children}
    </WishListContext.Provider>
  );
}
