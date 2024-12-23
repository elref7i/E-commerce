import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Loading from '../Loading/Loading';
import { useQuery } from '@tanstack/react-query';
export default function CategorySlider() {
  async function getCategories() {
    const options = {
      url: 'https://ecommerce.routemisr.com/api/v1/categories',
      method: 'GET',
    };
    return axios.request(options);
  }
  let { data, isLoading } = useQuery({
    queryKey: ['homeCategory'],
    queryFn: getCategories,
    refetchOnMount: false,
  });
  if (isLoading) return <Loading />;
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {data.data.data.map((category) => {
          return (
            <SwiperSlide className="cursor-pointer" key={category._id}>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={category.image}
                  className="w-[150px] h-[150px] object-cover mb-2"
                  alt=""
                />
                <h3 className="text-center text-lg font-medium">
                  {category.name}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
