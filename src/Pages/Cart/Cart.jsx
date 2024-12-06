import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/Cart.context';
import Loading from '../../Components/Loading/Loading';
// import CartProduct from '../../Components/CartProduct/CartProduct';
import CartProduct from '../../Components/CartProduct/CartProduct';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartInfo, getProductToCart, clearAllCart } = useContext(CartContext);
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
            <>
              <div className="text-center bg-slate-200 p-5">
                <p className="mb-3">
                  Oops! Your cart is empty. Start shopping now by clicking the
                  button below and find something you love!
                </p>
                <Link
                  to="/"
                  className="btn bg-primary-500 hover:bg-primary-600  px-5
                py-2"
                >
                  Back To Home
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4 mb-5">
                {cartInfo.data.products.map((product) => (
                  <CartProduct cartInfo={product} key={product._id} />
                ))}
              </div>
              <div className="flex justify-center sm:justify-between items-center flex-wrap gap-3">
                <p className="text-lg">
                  Your Total Cart Price{' '}
                  <span className="font-bold text-primary-500">
                    ${cartInfo.data.totalCartPrice}
                  </span>
                </p>
                <button
                  className="clea btn bg-red-600 text-xl font-medium block ml-auto hover:bg-red-700 px-4 py-3"
                  onClick={clearAllCart}
                >
                  Clear All
                </button>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
