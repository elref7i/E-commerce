import { useEffect, useState } from 'react';
import DropdownFilter from '../../Components/DropdownFilter/DropdownFilter';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import axios from 'axios';

export default function Prouducts() {
  const [products, setProducts] = useState(null);

  async function getProuducts() {
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/products',
        method: 'GET',
      };
      let { data } = await axios.request(options);
      setProducts(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProuducts();
  }, []);
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
        {products ? (
          <section className="cards grid grid-cols-12 gap-5">
            {products.map((proudect) => (
              <Card productInfo={proudect} key={proudect._id} />
            ))}
          </section>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}
