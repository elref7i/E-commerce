import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Categories() {
  async function getCategories() {
    const options = {
      url: 'https://ecommerce.routemisr.com/api/v1/categories',
      method: 'GET',
    };
    return axios.request(options);
  }
  let { data, isLoading } = useQuery({
    queryKey: ['Categories'],
    queryFn: getCategories,
    refetchOnMount: false,
  });

  console.log(data);
  if (isLoading) return <Loading />;
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-primary-500 border-b-2 border-primary-500 pb-2 flex items-center gap-2">
        <i className="fa-solid fa-layer-group text-3xl animate-pulse"></i>
        Explore Categories
      </h1>
      <Helmet>
        <title>Categories - Freshcart</title>
        <meta
          name="description"
          content="Browse through various categories of products and find what you need at Freshcart."
        />
        <meta
          name="keywords"
          content="Categories, Freshcart, Shopping, Products, Online Store"
        />
        <meta property="og:title" content="Categories - Freshcart" />
        <meta
          property="og:description"
          content="Explore a wide range of products under different categories at Freshcart. Find your favorite items now!"
        />
      </Helmet>
      {/* <Helmet>
        <title>Categories </title>
        <meta
          name="Categories Page Website"
          content="Freshcart | Categories Page"
        />
      </Helmet> */}
      <section className="grid grid-cols-12 gap-4">
        {data.data.data.map((category) => (
          <Link
            key={category._id}
            className="cursor-pointer category text-center rounded-md overflow-hidden 
        shadow-md col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 "
          >
            <div className="h-64">
              <img
                src={category.image}
                alt=""
                className="w-full h-64 object-contain"
              />
            </div>
            <div className="content-body p-3 text-2xl text-primary-500">
              {category.name}
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
