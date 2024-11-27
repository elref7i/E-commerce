// import { Link, NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import freshcCartLogo from '../../assets/images/freshcart-logo.svg';
import { Navbar, NavbarCollapse, NavbarToggle } from 'flowbite-react';
export default function NavbarWebsite() {
  return (
    <nav className="shadow-md py-3">
      <Navbar rounded className="">
        <Link to="/">
          <img
            src={freshcCartLogo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Link>
        <div className="flex  gap-5 items-center md:order-2 ">
          {/* <div className="cart relative cursor-pointer  ">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <div className="cart-counter absolute h-6 w-6 flex items-center  justify-center rounded-full bg-primary-500 top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <i
                className="fa-solid fa-spinner text-white h-4 w-4 animate-spin"
                title="Wait"
              ></i>
            </div>
          </div> */}
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
          {/* <Link to="/home" className="">
              <i className="fa-solid fa-right-from-bracket text-xl text-red-400 hover:text-red-600 transition-colors duration-200"></i>
            </Link> */}
          <NavbarToggle className="block lg:hidden" />
        </div>
        <NavbarCollapse>
          <div className=" flex items-center py-3 md:py-0  flex-col md:flex-row gap-4">
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
          </div>
        </NavbarCollapse>
      </Navbar>
    </nav>
  );
}
