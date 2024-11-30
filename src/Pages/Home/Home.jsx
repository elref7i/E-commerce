import axios from 'axios';
import Card from '../../Components/Card/Card';
import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';

export default function Home() {
  const [responseData, setResponseData] = useState(null);
  async function getData() {
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/products',
        method: 'GET',
      };
      let { data } = await axios.request(options);
      console.log(data.data);

      setResponseData(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {responseData ? (
        <div className="cards grid grid-cols-12 gap-3">
          {responseData.map((proudect) => (
            <Card productInfo={proudect} key={proudect.category._id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
