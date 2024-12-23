import { Link, NavLink } from 'react-router-dom';
import freshcCartLogo from '../../assets/images/freshcart-logo.svg';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/User.context';
import { CartContext } from '../../context/Cart.context';
import { WishListContext } from '../../context/WishList.context';
import { CheckLogout } from '../CheckLogout/CheckLogout';
export default function NavbarWebsite() {
  const [isOpanMenue, setIsOpanMenue] = useState(false);
  const { token } = useContext(UserContext);
  const { cartInfo, getProductToCart } = useContext(CartContext);
  const { productWishlist, getLoggedUserWishlist } =
    useContext(WishListContext);
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpanMenue(true);
    } else {
      setIsOpanMenue(false);
    }
  };
  useEffect(() => {
    handleResize();
    getProductToCart();
    getLoggedUserWishlist();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggle() {
    setIsOpanMenue(!isOpanMenue);
    console.log(isOpanMenue);
  }

  return (
    <nav className="shadow fixed top-0 right-0 left-0 z-30 py-5 bg-gray-100">
      <div className="container grid grid-cols-12 justify-between  gap-4 items-center ">
        <Link to="/" className="col-span-6 sm:col-span-4 ">
          <img
            src={freshcCartLogo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Link>
        {token && (
          <ul
            className={`${
              isOpanMenue ? 'flex' : 'hidden'
            }  order-10 col-span-12 static lg:order-none flex-col lg:flex-row flex justify-self-center self-center items-center gap-5 text-center  lg:col-span-6`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `nav-link ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/prouducts"
                className={({ isActive }) => {
                  return `nav-link  ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) => {
                  return `nav-link  ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) => {
                  return `nav-link  ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Brands
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allorders"
                className={({ isActive }) => {
                  return `nav-link  ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Orders
              </NavLink>
            </li>
          </ul>
        )}
        {token ? (
          <div
            className={`flex gap-3 md:gap-5 lg:gap-3 items-center col-span-6 sm:col-span-8  lg:col-span-2 justify-end`}
          >
            <div className="flex gap-3 sm:gap-5">
              <Link to="/wishlist" className="cart relative cursor-pointer  ">
                <i
                  className={` ${
                    productWishlist !== null && productWishlist.count > 0
                      ? 'fa-solid text-primary-400  '
                      : 'fa-regular'
                  }
                    }  text-lg sm:text-2xl hover:text-primary-500  fa-heart duration-300 transition-colors`}
                ></i>
                <div className="heart-counter absolute size-4  sm:size-6 flex items-center  justify-center rounded-full bg-primary-500 top-0 right-0 translate-x-1/2 -translate-y-1/2">
                  {productWishlist === null ? (
                    <i
                      className="fa-solid fa-spinner text-white size-3 sm:size-4 animate-spin "
                      title="Wait"
                    ></i>
                  ) : (
                    <span className="text-white text-sm sm:text-lg">
                      {' '}
                      {productWishlist.count}
                    </span>
                  )}
                </div>
              </Link>
              <Link to="cart" className="cart relative cursor-pointer ">
                <i
                  className={`${
                    cartInfo !== null && cartInfo.numOfCartItems > 0
                      ? 'fa-cart-shopping text-primary-400  '
                      : 'fa-cart-plus '
                  } fa-solid  text-lg sm:text-2xl hover:text-primary-500 duration-300 transition-colors`}
                ></i>
                <div className="cart-counter absolute size-4  sm:size-6 flex items-center  justify-center rounded-full bg-primary-500 top-0 right-0 translate-x-1/2 -translate-y-1/2">
                  {cartInfo === null ? (
                    <i
                      className="fa-solid fa-spinner text-white size-3 sm:size-4 animate-spin"
                      title="Wait"
                    ></i>
                  ) : (
                    <span className="text-white text-sm sm:text-lg">
                      {' '}
                      {cartInfo.numOfCartItems}
                    </span>
                  )}
                </div>
              </Link>
            </div>
            <div className="icon-menue">
              <i
                className="fa-solid fa-bars text-lg sm:text-2xl hover:text-primary-500 cursor-pointer lg:hidden"
                onClick={toggle}
              ></i>
            </div>
            <CheckLogout />
          </div>
        ) : (
          ''
        )}
        {!token ? (
          <div className="col-span-6 sm:col-span-8 justify-self-end">
            <Link
              to="/login"
              className="btn bg-primary-500 hover:bg-primary-600  px-2 sm:px-3 py-2 text-sm sm:text-lg sm:font-semibold "
            >
              Login Now
              <span className="ml-2">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
}
