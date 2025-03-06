"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css"; // Custom CSS file for pagination styling

const images = [
  "/sliders1.png",
  "/sliders2.png",
  "/sliders3.png",
  "/sliders4.png",
  "/sliders5.png",
  "/sliders6.png",
  "/sliders7.png",
  "/sliders8.png",
  "/sliders9.png",
  "/sliders10.png",
  "/newsliders.jpg",
  "/sliders12.png",
  "/newslider.jpg",
  "/sliders14.png",
  "/sliders15.png",
  "/sliders16.png",
  "/sliders17.png",
  "/sliders18.png",
];

const ImageSlider = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 1, spaceBetween: 20 },
            1280: { slidesPerView: 1, spaceBetween: 20 },
          }}
          className="rounded-lg shadow-lg custom-pagination"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] flex justify-center">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1280}
                  height={640}
                  className="w-full max-w-[1280px] h-full object-contain rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;
