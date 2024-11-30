import axios from 'axios';
import Card from '../../Components/Card/Card';
import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';

export default function Home() {
  const [products, setProducts] = useState(null);
  async function getData() {
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/products',
        method: 'GET',
      };
      let { data } = await axios.request(options);

      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {products ? (
        <div className="cards grid grid-cols-12 gap-3">
          {products.map((proudect) => (
            <Card productInfo={proudect} key={proudect._id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
