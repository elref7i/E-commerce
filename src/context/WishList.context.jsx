import { createContext, useContext, useState } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';
import toast from 'react-hot-toast';

export const WishListContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function WhishListProvider({ children }) {
  const { token } = useContext(UserContext);
  const [productWishlist, setProductWishlist] = useState(null);
  const [checkProduct, setCheckProduct] = useState(false);

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
        setCheckProduct(true);
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
      setProductWishlist(data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteProductFromWishlist({ productId }) {
    const removeProduct = toast.loading('watting ');
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        method: 'DELETE',
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      if (data.status === 'success') {
        getLoggedUserWishlist();
        toast.success(data.status);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(removeProduct);
    }
  }

  function checkedProduct({ productId }) {
    if (!productWishlist || !productWishlist.data) return false;
    const productInfo = productWishlist.data.find(
      (product) => product.id === productId
    );
    return productInfo;
  }
  return (
    <WishListContext.Provider
      value={{
        addProuductWishList,
        getLoggedUserWishlist,
        productWishlist,
        deleteProductFromWishlist,
        checkProduct,
        checkedProduct,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
