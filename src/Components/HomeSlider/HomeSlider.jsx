import { Autoplay } from 'swiper/modules';
import silderImageOne from '../../assets/images/slider-image-1.jpeg';
import silderImageTwo from '../../assets/images/slider-image-2.jpeg';
import silderImageThree from '../../assets/images/slider-image-3.jpeg';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
//*Swiper => Create swiper
//*SwiperSlide => Create swiper in swiper

// Import Swiper styles
export default function HomeSlider() {
  return (
    <>
      <div className="col-span-8 row-span-7">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          className="w-full h-full object-cover "
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img
              src={silderImageOne}
              className="w-full h-full object-cover "
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={silderImageOne}
              className="w-full h-full object-cover "
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={silderImageOne}
              className="w-full h-full object-cover "
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-4">
        <Swiper>
          <SwiperSlide>
            <img
              src={silderImageTwo}
              className="w-full h-full object-cover "
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silderImageTwo} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silderImageTwo} className="w-full" alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper>
          <SwiperSlide>
            <img src={silderImageThree} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silderImageThree} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silderImageThree} className="w-full" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
