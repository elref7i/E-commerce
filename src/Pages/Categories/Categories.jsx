import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Categories() {
  const [dataSubcategories, setDataSubcategories] = useState(null);
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
  async function getSubCategories({ productId }) {
    const subCat = toast.loading('Watting');
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/categories/${productId}/subcategories`,
        method: 'GET',
      };
      const { data } = await axios.request(options);
      setDataSubcategories(data.data);
      console.log(data);

      toast.success('success');
    } catch (error) {
      console.log(error);
      toast.error('error');
    } finally {
      toast.dismiss(subCat);
    }
  }

  if (isLoading) return <Loading />;
  !console.log(data);
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
      <section className="grid grid-cols-12 mb-8 gap-4">
        {data.data.data.map((category) => (
          <div
            onClick={() => {
              getSubCategories({ productId: category._id });
            }}
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
          </div>
        ))}
      </section>
      <section className="bg-slate-200 rounded-md p-5 ">
        <h2 className="name-sub-category font-bold text-3xl text-primary-500 text-center">
          Women&apos;s Fashion subcategories
        </h2>
        <div className="subs grid grid-cols-12 gap-5 py-5">
          {dataSubcategories
            ? dataSubcategories.map((cat) => (
                <div
                  key={cat._id}
                  className="col-span-12 bg-white text-center p-6 rounded-lg shadow-md text-lg font-bold capitalize sm:col-span-4 md:col-span-3"
                >
                  AHmed refai
                </div>
              ))
            : ''}
        </div>
      </section>
    </>
  );
}

{
  /* <h2 className="name-sub-category font-bold text-3xl text-primary-500 text-center">
Women&apos;s Fashion subcategories
</h2>
<div className="subs grid grid-cols-12 gap-5 py-5">
<div className="col-span-12 bg-white text-center p-6 rounded-lg shadow-md text-lg font-bold capitalize sm:col-span-4 md:col-span-3">
  AHmed refai
</div>
</div> */
}
