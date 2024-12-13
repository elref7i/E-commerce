import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Loading from '../../Components/Loading/Loading';

export default function Brands() {
  const [brands, setBrands] = useState(null);
  async function getALlBrands() {
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/brands',
        method: 'GET',
      };
      let { data } = await axios.request(options);
      console.log(data.data);
      setBrands(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getALlBrands();
  }, []);
  return (
    <>
      <Helmet>
        <title>Brands</title>
        <meta name="Brands Website" content="Freshcart | Brands" />
      </Helmet>
      {brands ? (
        <section className="all-brands">
          <h1 className="font-bold text-4xl text-primary-500 mb-8 text-center">
            All Brands
          </h1>
          <div className="brands grid grid-cols-12 gap-4 shadow-primary-500 hover:shadow-slate-500 duration-500 transition-shadow p-5 shadow-inner rounded-md">
            {brands.map((brand) => (
              <div
                key={brand._id}
                className="card text-center shadow-sm rounded-md shadow-slate-500 hover:shadow-primary-400 duration-300 transition-shadow cursor-pointer col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
              >
                <img src={brand.image} alt={brand.name} />
                <h2 className="mb-2 text-xl font-medium">{brand.name}</h2>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
