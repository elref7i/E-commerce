// import { Link, NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import freshcCartLogo from '../../assets/images/freshcart-logo.svg';
import { useEffect, useState } from 'react';
export default function NavbarWebsite() {
  const [isOpanMenue, setIsOpanMenue] = useState(false);
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpanMenue(true);
    } else {
      setIsOpanMenue(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [isOpanMenue]);
  function toggle() {
    setIsOpanMenue(!isOpanMenue);
    console.log(isOpanMenue);
  }
  return (
    <nav className="shadow-md py-3">
      <div className="container grid grid-cols-12 gap-5 py-2  justify-between">
        <Link to="/" className="col-span-6 lg:col-span-2">
          <img
            src={freshcCartLogo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Link>
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
              to="/cart"
              className={({ isActive }) => {
                return `nav-link  ${
                  isActive ? 'before:!w-full font-semibold' : ''
                }`;
              }}
            >
              Cart
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
              Prouducts
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
        </ul>
        <div className="flex gap-5 items-center col-span-6 lg:col-span-4  justify-self-end ">
          <div className="cart relative cursor-pointer ">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <div className="cart-counter absolute h-6 w-6 flex items-center  justify-center rounded-full bg-primary-500 top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <i
                className="fa-solid fa-spinner text-white h-4 w-4 animate-spin"
                title="Wait"
              ></i>
            </div>
          </div>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return `btn bg-primary-500 hover:bg-primary-600 px-3 py-2 font-semibold  ${
                isActive ? '' : ''
              }`;
            }}
          >
            Login Now
            <span className="ml-2">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </NavLink>
          <Link to="/home" className="">
            <i className="fa-solid fa-right-from-bracket text-xl text-red-400 hover:text-red-600 transition-colors duration-200"></i>
          </Link>
          <div className="icon-menue">
            <i
              className="fa-solid fa-bars text-2xl hover:text-primary-500 cursor-pointer lg:hidden"
              onClick={toggle}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
