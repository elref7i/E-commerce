import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/Cart.context';
import ReactImageGallery from 'react-image-gallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../../Components/Card/Card';
export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const { addProductToCart } = useContext(CartContext);

  let { id } = useParams();
  async function getSpecificProduct() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method: 'GET',
      };
      const { data } = await axios.request(options);
      console.log(data.data);
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getRalatedProduct() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${product.category._id}`,
        method: 'GET',
      };
      const { data } = await axios.request(options);
      console.log(data.data);
      setRelatedProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSpecificProduct();
  }, []);
  useEffect(() => {
    if (product === null) return;
    getRalatedProduct();
  }, [product]);
  return (
    <>
      {product === null ? (
        <Loading />
      ) : (
        <>
          <section className="grid grid-cols-12 gap-1 md:gap-8 bg-slate-100 p-4 rounded-xl mb-10">
            <div className="image-product flex items-center bg-white col-span-12 md:col-span-4 rounded-md shadow-lg overflow-hidden">
              {/* <img
              src={product.imageCover}
              className="w-full  h-64 lg:h-96 object-contain"
              alt=""
            /> */}
              <ReactImageGallery
                items={product.images.map((image) => {
                  return {
                    original: image,
                    thumbnail: image,
                  };
                })}
                autoPlay={true}
                thumbnailPosition={'left'}
                showPlayButton={false}
                showNav={false}
              />
            </div>
            <article className="col-span-12 md:col-span-8 py-5 flex flex-col justify-between ">
              <div>
                <div className="product-details space-y-6">
                  <div className="brand flex gap-1 items-center">
                    <div className="size-12 object-cover rounded-full bg-white overflow-hidden">
                      <img
                        src={product.brand.image}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </div>
                    <h3 className="name-brand font-medium text-lg">
                      {product.brand.name}
                    </h3>
                  </div>
                  <div className="">
                    <h2 className="title font-extrabold text-2xl mb-2">
                      {product.title}
                    </h2>
                    <h3 className="name-category font-extrabold mb-2 ">
                      {product.category.name}
                    </h3>
                    <p className="text-sm text-slate-900 mb-3">
                      {product.description}
                    </p>
                    <div className="rating flex text-xl items-center gap-1 mb-2">
                      <i className="fa-solid fa-star text-yellow-300"></i>
                      <span>{product.ratingsAverage}</span>
                    </div>
                    {product.priceAfterDiscount ? (
                      <h4 className="price text-xl font-medium mb-3">
                        Now
                        <span className="text-primary-500 mx-2 font-bold">
                          ${product.priceAfterDiscount}
                        </span>
                        <span>
                          (Was $
                          <span className=" font-bold line-through ">
                            {product.price}
                          </span>
                          ) - Limited Time !
                        </span>
                      </h4>
                    ) : (
                      <h4 className="text-primary-500 text-xl mb-3 font-bold">
                        ${product.price}
                      </h4>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-8 items-center justify-between flex-wrap">
                <button
                  onClick={() => {
                    addProductToCart({ productId: product.id });
                  }}
                  className="btn bg-primary-500 px-6 py-2 flex-1 hover:bg-primary-600 duration-300 transition-colors"
                >
                  Add Cart
                </button>
                <div className="size-12 border-2 border-solid border-primary-500 text-primary-500  hover:text-white hover:border-white hover:bg-primary-500 rounded-3xl flex items-center justify-center cursor-pointer duration-300 transition-colors">
                  <i className="fa-regular fa-heart text-2xl  "></i>
                </div>
              </div>
            </article>
          </section>
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {relatedProduct ? (
              relatedProduct.map((product) => {
                return (
                  <>
                    <SwiperSlide>
                      <Card
                        productInfo={product}
                        setProduct={setProduct}
                        key={product._id}
                      />
                    </SwiperSlide>
                    ;
                  </>
                );
              })
            ) : (
              <Loading />
            )}
          </Swiper>
        </>
      )}
    </>
  );
}
