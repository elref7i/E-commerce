import { Autoplay, Pagination } from "swiper/modules";
import silderImageOne from "../../assets/images/slider-image-1.jpeg";
import silderImageTwo from "../../assets/images/slider-image-2.jpeg";
import silderImageThree from "../../assets/images/slider-image-3.jpeg";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSlider() {
  const slides = [
    {
      id: 1,
      image: silderImageOne,
      title: "Welcome to FreshCart",
      subtitle: "Your one-stop shopping destination",
      description:
        "Discover amazing products with unbeatable prices and fast delivery.",
    },
    {
      id: 2,
      image: silderImageTwo,
      title: "Quality Products",
      subtitle: "Premium quality guaranteed",
      description:
        "Shop with confidence knowing all our products meet the highest standards.",
    },
    {
      id: 3,
      image: silderImageThree,
      title: "Fast Delivery",
      subtitle: "Quick and reliable shipping",
      description:
        "Get your orders delivered fast and secure right to your doorstep.",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        className="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-custom-lg"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !opacity-100",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="container-custom">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-primary-200">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6">
                      {slide.description}
                    </p>
                    <button className="btn btn-primary btn-lg">
                      Shop Now
                      <i className="fa-solid fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
