import axios from 'axios';
import { Helmet } from 'react-helmet';
import Loading from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ModelBrand } from '../../Components/ModelBrand/ModelBrand';
import { useContext } from 'react';
import { RelatedContext } from '../../context/Related.context';

export default function Brands() {
  const [showMedol, setShowModel] = useState(false);
  const { getSpecificBrand } = useContext(RelatedContext);

  async function getALlBrands() {
    const options = {
      url: 'https://ecommerce.routemisr.com/api/v1/brands',
      method: 'GET',
    };
    return axios.request(options);
  }
  let { data, isLoading } = useQuery({
    queryKey: ['Brands'],
    queryFn: getALlBrands,
    refetchOnMount: false,
  });
  console.log(data);

  if (isLoading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Brands</title>
        <meta name="Brands Website" content="Freshcart | Brands" />
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
          <div className="fixed w-screen min-h-screen  flex items-center  justify-center  inset-0 bg-slate-50 bg-opacity-50">
            <ModelBrand setShowModel={setShowModel} isLoading={isLoading} />
          </div>
        )}
      </section>
    </>
  );
}
