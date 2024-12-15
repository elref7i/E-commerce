import { useContext, useEffect } from 'react';
import { WishListContext } from '../../context/WishList.context';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/Cart.context';
import Loading from '../../Components/Loading/Loading';

export default function WishList() {
  const { getLoggedUserWishlist, productWishlist, deleteProductFromWishlist } =
    useContext(WishListContext);
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    getLoggedUserWishlist();
  }, []);
  return (
    <>
      <section className="my-wishlist space-y-4 mb-5">
        {productWishlist ? (
          productWishlist.data.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-5 shadow-md p-5 relative"
            >
              <div className="w-[100px] sm:min-w-[150px]  h-[150px] ">
                <img
                  src={product.imageCover}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex justify-between gap-3 flex-1 items-center  flex-wrap ">
                <article>
                  <Link
                    to=""
                    className="text-sm md:text-lg font-semibold text-primary-500"
                  >
                    {product.title}
                  </Link>
                  <h3 className=" text-[12px] sm:text-sm">refai</h3>
                  <h4 className="text-primary-300 font-semibold">
                    ${product.price}
                  </h4>
                </article>
                <button
                  className=" w-fit text-sm md:text-xl btn bg-primary-500 hover:bg-primary-600 px-2 py-3"
                  onClick={() => {
                    addProductToCart({ productId: product.id });
                  }}
                >
                  Add to cart
                </button>
              </div>
              <div
                onClick={() => {
                  deleteProductFromWishlist({ productId: product.id });
                }}
                className="size-8 absolute top-2 right-1  bg-slate-200 text-red-600  flex rounded-full items-center justify-center hover:text-slate-200 hover:bg-red-600 duration-200 transition-colors"
              >
                <i className="fa-solid fa-x text-lg cursor-pointer "></i>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}
