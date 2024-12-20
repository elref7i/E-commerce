/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/Cart.context';
import { WishListContext } from '../../context/WishList.context';
export default function Card({ productInfo }) {
  const {
    imageCover,
    category,
    description,
    title,
    price,
    ratingsAverage,
    id,
  } = productInfo;

  const { addProductToCart } = useContext(CartContext);
  const { addProuductWishList, checkedProduct } = useContext(WishListContext);
  return (
    <>
      <div className="group/parent card bg-white shadow-md rounded-md overflow-hidden  col-span-12 sm:col-span-6 md:col-span-4  lg:col-span-3">
        <div className="image-card relative cursor-pointer  ">
          <img src={imageCover} className="w-full h-48 object-contain" alt="" />
          <ul className="opacity-0 pl-3 justify-center flex gap-5 flex-col absolute group-hover/parent:opacity-100 duration-500 transition-opacity inset-0 bg-black bg-opacity-15 top-50 ">
            <li
              className={`animation-icon ${
                checkedProduct({ productId: id })
                  ? 'text-white bg-primary-500'
                  : 'bg-white text-primary-500'
              } `}
              onClick={() => {
                addProuductWishList({ productId: id });
              }}
            >
              <i className="fa-regular fa-heart"></i>
            </li>
            <li
              className="animation-icon bg-white text-primary-500"
              onClick={() => {
                addProductToCart({ productId: id });
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li className="animation-icon bg-white text-primary-500">
              <Link to={`/productdetails/${id}`}>
                <i className="fa-regular fa-eye"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-body py-5 px-3 space-y-3">
          <header className="header-body space-y-2">
            <h2 className="Category text-sm font-medium text-primary-500 mb-1">
              {category.name}
            </h2>
            <Link
              to={`/productdetails/${id}`}
              className="namec-category text-xl  font-medium line-clamp-1"
              title={`${title}`}
            >
              {title}
            </Link>
            <p
              className="description line-clamp-2 text-slate-500"
              title={`${description}`}
            >
              {description}
            </p>
          </header>
          <footer className="footer-body flex justify-between items-center">
            <p>
              {price} <span className="">EGP</span>
            </p>
            <div className="star">
              <i className="fa-solid fa-star  text-yellow-300"></i>
              <span className="text-slate-500">{ratingsAverage}</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
