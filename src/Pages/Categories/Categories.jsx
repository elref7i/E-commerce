import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router-dom';

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
