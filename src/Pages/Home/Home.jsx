import axios from 'axios';
import Card from '../../Components/Card/Card';
// import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
// import useOnline from '../../hooks/useOnline';
export default function Home() {
  async function getData() {
    console.log('✅');

    const options = {
      url: 'https://ecommerce.routemisr.com/api/v1/products',
      method: 'GET',
    };
    return axios.request(options);
  }

  let { data, isLoading } = useQuery({
    queryKey: ['homeProuducts'],
    queryFn: getData,
    refetchOnMount: false,
  });
  // console.log(data);

  if (isLoading) return <Loading />;
  return (
    <>
      <Helmet>
        <title>Home </title>
        <meta name="Home Page Website" content="Freshcart | Home Page" />
      </Helmet>
      <section className="grid grid-cols-12 mb-8">
        <HomeSlider />
      </section>
      <section className="mb-8 ">
        <CategorySlider />
      </section>
      <section className="cards grid grid-cols-12 gap-5">
        {data.data.data.map((proudect) => (
          <Card productInfo={proudect} key={proudect._id} />
        ))}
      </section>
    </>
  );
}
