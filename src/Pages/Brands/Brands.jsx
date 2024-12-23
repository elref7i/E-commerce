import axios from 'axios';
import { Helmet } from 'react-helmet';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ModelBrand } from '../../Components/ModelBrand/ModelBrand';

export default function Brands() {
  const [showModal, setShowModal] = useState(false);
  const [specificBrand, setSpecificBrand] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getAllBrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
  }

  async function getSpecificBrand({ brandID }) {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/brands/${brandID}`
      );
      setSpecificBrand(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  let { data, isLoading } = useQuery({
    queryKey: ['Brands'],
    queryFn: getAllBrands,
    staleTime: 1000,
    refetchOnMount: false,
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Brands - Freshcart</title>
        <meta
          name="description"
          content="Discover top brands available at Freshcart. Shop from leading brands in various categories."
        />
        <meta
          name="keywords"
          content="Brands, Freshcart, Shopping, Top Brands, Online Store"
        />
        <meta property="og:title" content="Brands - Freshcart" />
        <meta
          property="og:description"
          content="Explore a diverse selection of brands at Freshcart and find the best deals on products from your favorite brands."
        />
      </Helmet>

      <section className="all-brands bg-gray-50 py-10 p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-primary-600 border-b-4  pb-4 ">
          <i className="fa-solid fa-tags text-4xl animate-bounce"></i>
          &nbsp; Top Brands
        </h1>

        <div className="brands grid grid-cols-12 gap-6 container mx-auto ">
          {data.data.data.map((brand) => (
            <div
              key={brand._id}
              onClick={() => {
                getSpecificBrand({ brandID: brand._id });
                setShowModal(true);
              }}
              className="card text-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow cursor-pointer col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-40 object-contain mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold text-gray-700">
                {brand.name}
              </h2>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <ModelBrand
              specificBrand={specificBrand}
              setShowModal={setShowModal}
              loading={loading}
            />
          </div>
        )}
      </section>
    </>
  );
}
