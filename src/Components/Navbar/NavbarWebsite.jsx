// import { Link, NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import freshcCartLogo from '../../assets/images/freshcart-logo.svg';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/User.context';
import { CartContext } from '../../context/Cart.context';
import { WishListContext } from '../../context/WishList.context';
export default function NavbarWebsite() {
  const [isOpanMenue, setIsOpanMenue] = useState(false);
  const { token, logOut } = useContext(UserContext);
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
      <div className="container grid grid-cols-12 gap-x-3  items-center ">
        <Link to="/" className="col-span-11  sm:col-span-6 lg:col-span-2 ">
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
            }  order-10 col-span-12 lg:order-none flex-col lg:flex-row flex justify-self-center self-center items-center gap-5 text-center  lg:col-span-6`}
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
        <div
          className={`${
            !token ? 'lg:col-span-10' : 'lg:col-span-4 '
          } flex gap-5 items-center order-2 sm:order-none col-span-12  justify-self-center sm:col-span-5 md:justify-self-end`}
        >
          {token ? (
            <>
              <div className="flex gap-5">
                <Link to="/wishlist" className="cart relative cursor-pointer  ">
                  <i
                    className={` ${
                      productWishlist !== null && productWishlist.count > 0
                        ? 'fa-solid text-primary-400  '
                        : 'fa-regular'
                    }
                    }  text-2xl hover:text-primary-500  fa-heart duration-300 transition-colors`}
                  ></i>
                  <div className="heart-counter absolute h-6 w-6 flex items-center  justify-center rounded-full bg-primary-500 top-0 right-0 translate-x-1/2 -translate-y-1/2">
                    {productWishlist === null ? (
                      <i
                        className="fa-solid fa-spinner text-white h-4 w-4 animate-spin"
                        title="Wait"
                      ></i>
                    ) : (
                      <span className="text-white">
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
                    } fa-solid text-2xl hover:text-primary-500 duration-300 transition-colors`}
                  ></i>
                  <div className="cart-counter absolute h-6 w-6 flex items-center  justify-center rounded-full bg-primary-500 top-0 right-0 translate-x-1/2 -translate-y-1/2">
                    {cartInfo === null ? (
                      <i
                        className="fa-solid fa-spinner text-white h-4 w-4 animate-spin"
                        title="Wait"
                      ></i>
                    ) : (
                      <span className="text-white">
                        {' '}
                        {cartInfo.numOfCartItems}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </>
          ) : (
            ''
          )}
          {!token ? (
            <Link
              to="/login"
              className="btn bg-primary-500 hover:bg-primary-600 px-3 py-2 font-semibold "
            >
              Login Now
              <span className="ml-2">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          ) : (
            ''
          )}
          {token ? (
            <Link to="/" className="">
              <i
                className="fa-solid fa-right-from-bracket text-xl text-red-400 hover:text-red-600 transition-colors duration-200"
                onClick={logOut}
              ></i>
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className="icon-menue col-span-1  order-1 sm:order-none">
          <i
            className="fa-solid fa-bars text-2xl hover:text-primary-500 cursor-pointer lg:hidden"
            onClick={toggle}
          ></i>
        </div>
      </div>
    </nav>
  );
}
