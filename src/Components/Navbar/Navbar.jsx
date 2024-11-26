import { Link, NavLink } from 'react-router-dom';
import freshcCartLogo from '../../assets/images/freshcart-logo.svg';
export default function Navbar() {
  return (
    <>
      <nav className="py-4 shadow-md">
        <div className="container flex justify-between ">
          <Link className="log" to="/">
            <img src={freshcCartLogo} alt="" className="w-full" />
          </Link>
          <ul className="flex items-center gap-5">
            <li className="">
              <NavLink
                to="/home"
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
                  return `nav-link ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => {
                  return `nav-link ${
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
                  return `nav-link ${
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
                  return `nav-link ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Brands
              </NavLink>
            </li>
          </ul>
          <div className="cart relative cursor-pointer ">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <div className="cart-counter absolute h-6 w-6 flex items-center  justify-center rounded-full bg-primary-500 top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <i className="fa-solid fa-spinner text-white h-4 w-4 animate-spin"></i>
            </div>
          </div>
          <ul className="Links flex gap-3 items-center">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return `nav-link ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => {
                  return `nav-link ${
                    isActive ? 'before:!w-full font-semibold' : ''
                  }`;
                }}
              >
                Register
              </NavLink>
            </li>
            {/* 
             ***Dark Mode  
              <li>

            </li> */}
            <li>
              <Link to="/home" className="">
                <i className="fa-solid fa-right-from-bracket text-xl text-red-400 hover:text-red-600 transition-colors duration-200"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
