import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/Cart.context';
import Loading from '../../Components/Loading/Loading';
// import CartProduct from '../../Components/CartProduct/CartProduct';
import CartProduct from '../../Components/CartProduct/CartProduct';

export default function Cart() {
  const { cartInfo, getProductToCart } = useContext(CartContext);
  useEffect(() => {
    getProductToCart();
  }, []);

  return (
    <>
      {cartInfo === null ? (
        <Loading />
      ) : (
        <section>
          {cartInfo.numOfCartItems === 0 ? (
            <p>Refai</p>
          ) : (
            <div className="space-y-4 mb-5">
              {cartInfo.data.products.map((product) => (
                <CartProduct cartInfo={product} key={product._id} />
              ))}
            </div>
          )}
          <div className="flex justify-center sm:justify-between items-center flex-wrap gap-3">
            <p className="text-lg">
              Your Total Cart Price{' '}
              <span className="font-bold text-primary-500">
                ${cartInfo.data.totalCartPrice}
              </span>
            </p>
            <button className="clea btn bg-red-600 text-xl font-medium block ml-auto hover:bg-red-700 px-4 py-3">
              Clear All
            </button>
          </div>
        </section>
      )}
    </>
  );
}
