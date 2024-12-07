import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function CartProduct({ cartInfo }) {
  console.log(cartInfo);
  const { price, count } = cartInfo;
  const { category, title, imageCover, id } = cartInfo.product;
  // const { updateCount, setUpdateCount } = useState(count);
  let { removeProductFromCart, updateProductCount } = useContext(CartContext);

  return (
    <>
      <div className="grid grid-cols-12 items-center gap-3   justify-center sm:justify-between shadow-md p-1  relative">
        <div className="flex gap-5 items-center  col-span-12 sm:col-span-9 ">
          <div className=" bg-black">
            <img
              src={imageCover}
              className="w-[150px] h-[150px] object-cover"
              alt=""
            />
          </div>
          <article>
            <Link
              to={`/productdetails/${id}`}
              className="text-sm md:text-lg font-semibold text-primary-500"
            >
              {title}
            </Link>
            <h3 className="text-[12px] sm:text-sm">{category.name}</h3>
            <h4 className="text-primary-300 font-semibold">${price}</h4>
          </article>
        </div>
        <div className="addtion  flex justify-center gap-5 items-center bg-slate-200 w-fit justify-self-center p-2 rounded-md col-span-12 sm:col-span-3">
          <i
            onClick={() => {
              updateProductCount({ productID: id, count: count - 1 });
            }}
            className="fa-solid fa-minus text-lg font-bold text-primary-500 hover:text-primary-700 duration-300 transition-colors cursor-pointer"
          ></i>
          <div className="counter text-xl font-bold text">{count}</div>
          <i
            onClick={() => {
              updateProductCount({ productID: id, count: count + 1 });
            }}
            className="fa-solid fa-plus text-lg font-bold text-primary-500 hover:text-primary-700 duration-300 transition-colors cursor-pointer"
          ></i>
        </div>
        <div
          className="size-8 absolute top-2 right-1  bg-slate-200 text-red-600  flex rounded-full items-center justify-center hover:text-slate-200 hover:bg-red-600 duration-200 transition-colors"
          onClick={() => {
            removeProductFromCart({ rmProductID: id });
          }}
        >
          <i className="fa-solid fa-x text-lg cursor-pointer "></i>
        </div>
      </div>
    </>
  );
}
