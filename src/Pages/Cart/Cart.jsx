import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/Cart.context';
import Loading from '../../Components/Loading/Loading';
import imageloadin from '../../assets/images/Animation - 1734929112513.gif';
import { HiShoppingCart } from 'react-icons/hi';
import { Button } from 'flowbite-react';
import CartProduct from '../../Components/CartProduct/CartProduct';
import { Link } from 'react-router-dom';
import CheckClearAll from '../../Components/Check/Check';
import { Helmet } from 'react-helmet';

export default function Cart() {
  const { cartInfo, getProductToCart, clearAllCart } = useContext(CartContext);
  useEffect(() => {
    getProductToCart();
  }, []);

  return (
    <>
      <Helmet>
        <title>Cart - Freshcart</title>
        <meta
          name="description"
          content="View and manage the items in your cart. Secure checkout and easy payment options at Freshcart."
        />
        <meta
          name="keywords"
          content="Cart, Freshcart, Shopping Cart, Checkout, Online Store"
        />
        <meta property="og:title" content="Cart - Freshcart" />
        <meta
          property="og:description"
          content="Review the products you've added to your cart and proceed to checkout with Freshcart."
        />
      </Helmet>
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-primary-500 border-b-2 border-primary-500 pb-2 flex items-center gap-2">
        <i className="fa-solid fa-box text-3xl animate-pulse"></i> Shopping Cart
      </h1>
      {cartInfo === null ? (
        <Loading />
      ) : (
        <section>
          {cartInfo.numOfCartItems === 0 ? (
            <>
              <div className="text-center bg-slate-200 p-5">
                <img src={imageloadin} alt="" className="w-16 mx-auto mb-2" />
                <p className="mb-4">
                  <b>Oops!</b> Your cart is empty. Start shopping now by
                  clicking the button below and find something you love!
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
              <div className="flex justify-center  mb-8 sm:justify-between items-center flex-wrap gap-3">
                <p className="font-medium text-lg md:text-xl">
                  Your Total Cart Price{' '}
                  <span className="font-bold text-primary-500">
                    ${cartInfo.data.totalCartPrice}
                  </span>
                </p>
                <div className="flex items-center gap-3">
                  <CheckClearAll ClearCart={clearAllCart} />
                  <Link to="/checkout">
                    <Button className="group/parent py-2 btn bg-primary-500 hover:!bg-primary-600 duration-300 transition-colors">
                      <HiShoppingCart className="group-hover/parent:animate-none animate-bounce mr-2  h-5 w-5 duration-300 transition-[animate]" />
                      Buy now
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
