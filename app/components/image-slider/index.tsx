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
  "/sliders11.png",
  "/sliders12.png",
  "/sliders13.png",
  "/sliders14.png",
  "/sliders15.png",
  "/sliders16.png",
  "/sliders17.png",
  "/sliders18.png",
];

const ImageSlider = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.25, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className="rounded-lg shadow-lg custom-pagination"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={800}
                height={400}
                className="w-full h-96 object-contain rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;
