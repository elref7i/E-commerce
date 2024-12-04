import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/Cart.context';
import Loading from '../../Components/Loading/Loading';

export default function Cart() {
  const { cartInfo, getProductToCart } = useContext(CartContext);
  // const { protucts } = cartInfo;

  useEffect(() => {
    getProductToCart();
  }, []);
  return (
    <>
      {cartInfo === null ? (
        <Loading />
      ) : (
        <section>
          {cartInfo.numOfCartItems === 0 ? <h2>refai</h2> : <h2>Good</h2>}
        </section>
      )}
    </>
  );
}
