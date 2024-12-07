import axios from 'axios';
import testImage from '../../assets/images/favicon.png';
import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import { data, useParams } from 'react-router-dom';
export default function ProductDetails() {
  const [product, setProduct] = useState(null);

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
  useEffect(() => {
    getSpecificProduct();
  }, []);
  return (
    <>
      {product === null ? (
        <Loading />
      ) : (
        <section className="grid grid-cols-12 gap-1 md:gap-8 bg-slate-100 p-4 rounded-xl">
          <div className="image-product flex items-center bg-white col-span-12 md:col-span-4 rounded-md shadow-lg overflow-hidden">
            <img
              src={product.imageCover}
              className="w-full  h-64 lg:h-96 object-contain"
              alt=""
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
                <div className="space-y-[4px]">
                  <h2 className="title font-extrabold text-2xl">
                    {product.title}
                  </h2>
                  <h3 className="name-category font-extrabold ">
                    {product.category.name}
                  </h3>
                  <p className="text-sm text-slate-900">
                    {product.description}
                  </p>
                  <div className="rating flex items-center gap-1">
                    <i className="fa-solid fa-star text-yellow-300"></i>
                    <span>{product.ratingsAverage}</span>
                  </div>
                  <h4 className="price text-primary-500 font-semibold">
                    ${product.price}
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-center justify-between flex-wrap">
              <button className="btn bg-primary-500 px-6 py-2 flex-1">
                Add Cart
              </button>
              <div className="size-12 border-2 border-solid border-primary-500 rounded-3xl flex items-center justify-center ">
                <i className="fa-solid fa-heart text-2xl "></i>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
}
