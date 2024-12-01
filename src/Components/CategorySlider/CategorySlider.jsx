import axios from 'axios';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loading from '../Loading/Loading';
export default function CategorySlider() {
  const [categories, setCategories] = useState(null);
  async function getCategories() {
    try {
      const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/categories',
        method: 'GET',
      };
      let {
        data: { data },
      } = await axios.request(options);
      setCategories(data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  // useEffect;
  return (
    <>
      {!categories ? (
        <Loading />
      ) : (
        <Swiper className="grid grid-cols-12" slidesPerView={8} loop={true}>
          {categories.map((category) => {
            return (
              <SwiperSlide key={category._id} className="col-span-1">
                <img
                  src={category.image}
                  className="w-[150px] h-[150px] object-cover"
                  alt=""
                />
                <h3>{category.name}</h3>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}
