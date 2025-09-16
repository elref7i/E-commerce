import { Link, NavLink } from "react-router-dom";
import freshcCartLogo from "../../assets/images/freshcart-logo.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User.context";
import { CartContext } from "../../context/Cart.context";
import { WishListContext } from "../../context/WishList.context";
import { CheckLogout } from "../CheckLogout/CheckLogout";

export default function NavbarWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token } = useContext(UserContext);
  const { cartInfo, getProductToCart } = useContext(CartContext);
  const { productWishlist, getLoggedUserWishlist } =
    useContext(WishListContext);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    getProductToCart();
    getLoggedUserWishlist();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getProductToCart, getLoggedUserWishlist]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <img
              src={freshcCartLogo}
              className="h-8 w-auto sm:h-10"
              alt="FreshCart Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          {token && (
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "before:!w-full font-semibold text-primary-600"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/prouducts"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "before:!w-full font-semibold text-primary-600"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                Products
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "before:!w-full font-semibold text-primary-600"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                Categories
              </NavLink>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "before:!w-full font-semibold text-primary-600"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                Brands
              </NavLink>
              <NavLink
                to="/allorders"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive
                      ? "before:!w-full font-semibold text-primary-600"
                      : ""
                  }`
                }
                onClick={closeMenu}
              >
                Orders
              </NavLink>
            </div>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {token ? (
              <>
                {/* Wishlist & Cart Icons */}
                <div className="flex items-center space-x-3">
                  <Link
                    to="/wishlist"
                    className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors"
                    onClick={closeMenu}
                  >
                    <i
                      className={`fa-heart text-xl ${
                        productWishlist !== null && productWishlist.count > 0
                          ? "fa-solid text-primary-500"
                          : "fa-regular"
                      }`}
                    />
                    {productWishlist && productWishlist.count > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {productWishlist.count}
                      </span>
                    )}
                  </Link>

                  <Link
                    to="/cart"
                    className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors"
                    onClick={closeMenu}
                  >
                    <i
                      className={`fa-solid text-xl ${
                        cartInfo !== null && cartInfo.numOfCartItems > 0
                          ? "fa-cart-shopping text-primary-500"
                          : "fa-cart-plus"
                      }`}
                    />
                    {cartInfo && cartInfo.numOfCartItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {cartInfo.numOfCartItems}
                      </span>
                    )}
                  </Link>
                </div>

                {/* User Menu */}
                <CheckLogout />

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="lg:hidden p-2 text-gray-600 hover:text-primary-500 transition-colors"
                  aria-label="Toggle menu"
                >
                  <i
                    className={`fa-solid text-xl ${
                      isMenuOpen ? "fa-times" : "fa-bars"
                    }`}
                  />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="btn btn-primary btn-md"
              >
                Login
                <i className="fa-solid fa-arrow-right ml-2" />
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {token && isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              <NavLink
                to="/"
                className="block py-2 text-gray-700 hover:text-primary-500 transition-colors"
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/prouducts"
                className="block py-2 text-gray-700 hover:text-primary-500 transition-colors"
                onClick={closeMenu}
              >
                Products
              </NavLink>
              <NavLink
                to="/categories"
                className="block py-2 text-gray-700 hover:text-primary-500 transition-colors"
                onClick={closeMenu}
              >
                Categories
              </NavLink>
              <NavLink
                to="/brands"
                className="block py-2 text-gray-700 hover:text-primary-500 transition-colors"
                onClick={closeMenu}
              >
                Brands
              </NavLink>
              <NavLink
                to="/allorders"
                className="block py-2 text-gray-700 hover:text-primary-500 transition-colors"
                onClick={closeMenu}
              >
                Orders
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
