"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

type BlogImage = {
  src: string;
  alt: string;
};

interface BlogCardsProps {
  images: BlogImage[];
}

const BlogCardsSlider = ({ images }: BlogCardsProps) => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto ">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }} // Enable clickable pagination dots
          loop={true} // Enable infinite looping
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            1024: { slidesPerView: 1, spaceBetween: 15 },
            1280: { slidesPerView: 1, spaceBetween: 20 },
          }}
          className=" custom-pagination"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full  lg:h-[570px] flex justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover lg:object-contain xl:object-cover " // Use object-cover for better cropping
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogCardsSlider;
