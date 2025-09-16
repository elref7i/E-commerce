import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function CategorySlider() {
  async function getCategories() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/categories",
      method: "GET",
    };
    return axios.request(options);
  }

  let { data, isLoading } = useQuery({
    queryKey: ["homeCategory"],
    queryFn: getCategories,
    refetchOnMount: false,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 24,
          },
        }}
        className="pb-4"
      >
        {data.data.data.map((category) => (
          <SwiperSlide key={category._id}>
            <Link
              to={`/categories/${category._id}`}
              className="block group h-full"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center space-y-4 flex-1">
                  {/* Image Container - Fixed Size */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                    <img
                      src={category.image}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                      alt={category.name}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300" />
                  </div>

                  {/* Category Name - Fixed Height */}
                  <div className="h-12 flex items-center justify-center">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {category.name}
                    </h3>
                  </div>

                  {/* Category Count (if available) */}
                  <div className="text-xs text-gray-500 mt-auto">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100">
                      <i className="fa-solid fa-box mr-1"></i>
                      Products
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
