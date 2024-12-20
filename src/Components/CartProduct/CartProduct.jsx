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
      <div className="flex items-center gap-3 bg-slate-50   shadow-md p-3  relative">
        <div className="shadow-md rounded-lg overflow-hidden">
          <img
            src={imageCover}
            className="w-[150px] h-[150px] object-cover"
            alt=""
          />
        </div>
        <div className="flex w-full flex-wrap justify-between px-5  gap-5 items-center  ">
          <article>
            <Link
              to={`/productdetails/${id}`}
              className="text-lg md:text-xl font-semibold text-primary-500"
            >
              {title}
            </Link>
            <h3 className="text-[12px] md:text-sm">{category.name}</h3>
            <h4 className="text-primary-300 font-semibold">${price}</h4>
          </article>
          <div className="addtion   flex justify-center gap-5 items-center bg-slate-200 w-fit justify-self-center p-2 rounded-md col-span-12 sm:col-span-3">
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
