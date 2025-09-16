import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/Cart.context";
import ReactImageGallery from "react-image-gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../../Components/Card/Card";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { Helmet } from "react-helmet";
import { WishListContext } from "../../context/WishList.context";
import { RelatedContext } from "../../context/Related.context";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { addProductToCart } = useContext(CartContext);
  const { getRalatedProduct, relatedProduct } = useContext(RelatedContext);
  const { addProuductWishList, checkedProduct } = useContext(WishListContext);

  let { id } = useParams();
  async function getSpecificProduct() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method: "GET",
      };
      const { data } = await axios.request(options);
      console.log(data.data);
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpecificProduct();
  }, [id]);
  useEffect(() => {
    if (product === null) return;
    getRalatedProduct({ categoryID: product.category._id });
  }, [product]);
  return (
    <>
      <Helmet>
        <title>Product Details - Freshcart</title>
        <meta
          name="description"
          content="Get detailed information about the product, including features, specifications, and pricing, only at Freshcart."
        />
        <meta
          name="keywords"
          content="Product Details, Freshcart, Product Information, Online Store, Shopping"
        />
        <meta
          property="og:title"
          content="Product Details - Freshcart"
        />
        <meta
          property="og:description"
          content="Find all the details you need about your favorite products on Freshcart, including reviews, pricing, and specifications."
        />
      </Helmet>
      {product === null ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>{product.title} - Freshcart</title>
            <meta
              name="description"
              content={product.description}
            />
            <meta
              name="keywords"
              content={`${product.title}, Freshcart, ${product.category}, Shopping, Online Store`}
            />
            <meta
              property="og:title"
              content={`${product.title} - Freshcart`}
            />
            <meta
              property="og:description"
              content={product.description}
            />
          </Helmet>
          {/* Product Details Section */}
          <section className="mb-12">
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <ReactImageGallery
                      items={product.images.map((image) => ({
                        original: image,
                        thumbnail: image,
                      }))}
                      autoPlay={false}
                      thumbnailPosition={"bottom"}
                      showPlayButton={false}
                      showNav={true}
                      showFullscreenButton={true}
                      useBrowserFullscreen={false}
                    />
                  </div>
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                  {/* Brand */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white shadow-md overflow-hidden flex items-center justify-center">
                      <img
                        src={product.brand.image}
                        className="w-full h-full object-contain"
                        alt={product.brand.name}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Brand</p>
                      <h3 className="font-semibold text-lg">
                        {product.brand.name}
                      </h3>
                    </div>
                  </div>

                  {/* Title and Category */}
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {product.title}
                    </h1>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {product.category.name}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa-solid fa-star ${
                            i < Math.floor(product.ratingsAverage || 0)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium">
                      {product.ratingsAverage || "0.0"} (
                      {product.ratingsQuantity || 0} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="border-t border-gray-200 pt-6">
                    {product.priceAfterDiscount ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-primary-600">
                            ${product.priceAfterDiscount}
                          </span>
                          <span className="text-xl text-gray-500 line-through">
                            ${product.price}
                          </span>
                          <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                            Sale
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          You save $
                          {(product.price - product.priceAfterDiscount).toFixed(
                            2
                          )}
                        </p>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-primary-600">
                        ${product.price}
                      </span>
                    )}
                    <p className="text-sm text-gray-500 mt-1">EGP</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <button
                      onClick={() =>
                        addProductToCart({ productId: product.id })
                      }
                      className="btn btn-primary btn-lg flex-1"
                    >
                      <i className="fa-solid fa-cart-shopping mr-2"></i>
                      Add to Cart
                    </button>
                    <button
                      onClick={() => addProuductWishList({ productId: id })}
                      className={`btn btn-outline btn-lg px-6 ${
                        checkedProduct({ productId: id })
                          ? "bg-primary-500 text-white border-primary-500"
                          : ""
                      }`}
                    >
                      <i
                        className={`fa-heart mr-2 ${
                          checkedProduct({ productId: id })
                            ? "fa-solid"
                            : "fa-regular"
                        }`}
                      ></i>
                      {checkedProduct({ productId: id })
                        ? "In Wishlist"
                        : "Add to Wishlist"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Related Products Section */}
          {relatedProduct && relatedProduct.length > 0 && (
            <section className="mb-12">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Related Products
                </h2>
                <p className="text-gray-600">
                  You might also like these products
                </p>
              </div>

              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={24}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="pb-4"
              >
                {relatedProduct.map((relatedProductItem) => (
                  <SwiperSlide key={relatedProductItem._id}>
                    <Card productInfo={relatedProductItem} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          )}
        </>
      )}
    </>
  );
}
