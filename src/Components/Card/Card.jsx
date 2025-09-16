import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cart.context";
import { WishListContext } from "../../context/WishList.context";
import PropTypes from "prop-types";

export default function Card({ productInfo }) {
  const {
    imageCover,
    category,
    description,
    title,
    price,
    ratingsAverage,
    id,
    priceAfterDiscount,
  } = productInfo;

  const { addProductToCart } = useContext(CartContext);
  const { addProuductWishList, checkedProduct } = useContext(WishListContext);

  const isInWishlist = checkedProduct({ productId: id });

  return (
    <div className="card card-hover group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        <Link
          to={`/productdetails/${id}`}
          className="block"
        >
          <img
            src={imageCover}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            alt={title}
            loading="lazy"
          />
        </Link>

        {/* Discount Badge */}
        {priceAfterDiscount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Sale
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            <button
              className={`animation-icon ${
                isInWishlist
                  ? "bg-primary-500 text-white"
                  : "bg-white text-primary-500"
              }`}
              onClick={() => addProuductWishList({ productId: id })}
              aria-label={
                isInWishlist ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              <i
                className={`fa-heart ${
                  isInWishlist ? "fa-solid" : "fa-regular"
                }`}
              />
            </button>

            <button
              className="animation-icon bg-white text-primary-500"
              onClick={() => addProductToCart({ productId: id })}
              aria-label="Add to cart"
            >
              <i className="fa-solid fa-cart-shopping" />
            </button>

            <Link
              to={`/productdetails/${id}`}
              className="animation-icon bg-white text-primary-500"
              aria-label="View product details"
            >
              <i className="fa-regular fa-eye" />
            </Link>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6">
        <div className="space-y-3">
          {/* Category */}
          <div className="text-sm font-medium text-primary-500 uppercase tracking-wide">
            {category.name}
          </div>

          {/* Title */}
          <Link
            to={`/productdetails/${id}`}
            className="block group-hover:text-primary-500 transition-colors"
          >
            <h3 className="text-lg font-semibold line-clamp-2 text-gray-900 hover:text-primary-600">
              {title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {priceAfterDiscount ? (
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary-600">
                    ${priceAfterDiscount}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${price}
                  </span>
                </div>
              ) : (
                <span className="text-xl font-bold text-primary-600">
                  ${price}
                </span>
              )}
              <span className="text-xs text-gray-500">EGP</span>
            </div>

            <div className="flex items-center space-x-1">
              <i className="fa-solid fa-star text-yellow-400" />
              <span className="text-sm font-medium text-gray-600">
                {ratingsAverage || "0.0"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  productInfo: PropTypes.shape({
    imageCover: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ratingsAverage: PropTypes.number,
    id: PropTypes.string.isRequired,
    priceAfterDiscount: PropTypes.number,
  }).isRequired,
};
