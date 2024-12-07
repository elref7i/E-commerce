import axios from 'axios';
import Card from '../../Components/Card/Card';
import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';

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
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="grid grid-cols-12 mb-8">
        <HomeSlider />
      </section>
      <section className="mb-8 ">
        <CategorySlider />
      </section>
      {products ? (
        <section className="cards grid grid-cols-12 gap-5">
          {products.map((proudect) => (
            <Card productInfo={proudect} key={proudect._id} />
          ))}
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
