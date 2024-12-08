import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/Cart.context';
import Loading from '../../Components/Loading/Loading';

import { HiShoppingCart } from 'react-icons/hi';
import { Button } from 'flowbite-react';

import CartProduct from '../../Components/CartProduct/CartProduct';
import { Link } from 'react-router-dom';
import CheckClearAll from '../../Components/CheckClearAll/CheckClearAll';

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
              <div className="flex justify-center mb-8 sm:justify-between items-center flex-wrap gap-3">
                <p className="text-lg">
                  Your Total Cart Price{' '}
                  <span className="font-bold text-primary-500">
                    ${cartInfo.data.totalCartPrice}
                  </span>
                </p>

                <CheckClearAll />
                <Link to="/checkout">
                  <Button className="group/parent py-2 btn bg-primary-500 hover:!bg-primary-600 duration-300 transition-colors">
                    <HiShoppingCart className="group-hover/parent:animate-none animate-bounce mr-2  h-5 w-5 duration-300 transition-[animate]" />
                    Buy now
                  </Button>
                </Link>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
