import { createContext, useContext } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';

export const WishListContext = createContext(null);

export default function WhishListProvider({ children }) {
  const { token } = useContext(UserContext);
  async function addProuductWishList({ productId }) {
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/wishlist',
        method: 'GET',
        headers: {
          token,
        },
        data: {
          productId,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WishListContext.Provider value={{ addProuductWishList }}>
      {children}
    </WishListContext.Provider>
  );
}
