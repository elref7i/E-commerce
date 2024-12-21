/* eslint-disable react/prop-types */
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ModelBrand } from '../../Components/ModelBrand/ModelBrand';

export default function Brands() {
  const [showMedol, setShowModel] = useState(false);
  const [specificBrand, setSpecificBrand] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getALlBrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
  }
  async function getSpecificBrand({ brandID }) {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/brands/${brandID}`
      );
      //! console.log(data.data);
      setSpecificBrand(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  let { data, isLoading } = useQuery({
    queryKey: ['Brands'],
    queryFn: getALlBrands,
    staleTime: 1000,
    refetchOnMount: false,
  });
  console.log(data);

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
      <section className="all-brands">
        <h1 className="text-2xl md:text-4xl font-bold mb-5 text-primary-500 border-b-2 border-primary-500 pb-2 flex items-center gap-2">
          <i className="fa-solid fa-tags text-3xl animate-pulse"></i>
          Top Brands
        </h1>
        <div className="brands grid grid-cols-12 gap-4 shadow-primary-500 hover:shadow-slate-500 duration-500 transition-shadow p-5 shadow-inner rounded-md">
          {data.data.data.map((brand) => (
            <div
              onClick={() => {
                getSpecificBrand({ brandID: brand._id });
                setShowModel(true);
              }}
              key={brand._id}
              className="card text-center shadow-sm rounded-md shadow-slate-500 hover:shadow-primary-400 duration-300 transition-shadow cursor-pointer col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <img src={brand.image} alt={brand.name} />
              <h2 className="mb-2 text-xl font-medium">{brand.name}</h2>
            </div>
          ))}
        </div>
        {showMedol && (
          <div className="fixed w-screen min-h-screen  flex items-center  justify-center  inset-0 bg-slate-100 bg-opacity-60  ">
            <ModelBrand
              specificBrand={specificBrand}
              setShowModel={setShowModel}
              loading={loading}
            />
          </div>
        )}
      </section>
    </>
  );
}
