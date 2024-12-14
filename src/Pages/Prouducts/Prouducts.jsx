import DropdownFilter from '../../Components/DropdownFilter/DropdownFilter';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Prouducts() {
  async function getData() {
    const options = {
      url: 'https://ecommerce.routemisr.com/api/v1/products',
      method: 'GET',
    };
    return axios.request(options);
  }

  let { data, isLoading } = useQuery({
    queryKey: ['Products'],
    queryFn: getData,
    refetchOnMount: false,
  });

  if (isLoading) return <Loading />;
  return (
    <>
      <section>
        <div className="flex gap-5 mb-8">
          <div className="search  flex-1 ">
            <input
              type="search"
              placeholder="Search ..."
              className="form-control border-b-2 w-full"
            />
          </div>
          <DropdownFilter />
        </div>

        <section className="cards grid grid-cols-12 gap-5">
          {data.data.data.map((proudect) => (
            <Card productInfo={proudect} key={proudect._id} />
          ))}
        </section>
      </section>
    </>
  );
}
