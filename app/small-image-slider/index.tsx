"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css"; // Custom CSS for styling

// Define a type for the image prop (optional but recommended for TypeScript or better code clarity)
type BlogImage = {
  src: string;
  alt: string;
};

// Props interface for the component
interface BlogCardsProps {
  images: BlogImage[];
}

const BlogCardsSlider = ({ images }: BlogCardsProps) => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-5">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1} // Show 3 slides at a time
          spaceBetween={20} // Add spacing between slides
          pagination={{ clickable: true }} // Enable clickable pagination dots
          loop={true} // Enable infinite looping
          breakpoints={{
            // Responsive adjustments
            640: { slidesPerView: 1, spaceBetween: 10 }, // 1 slide on small screens
            1024: { slidesPerView: 1, spaceBetween: 15 }, // 2 slides on medium screens
            1280: { slidesPerView: 1, spaceBetween: 20 }, // 3 slides on large screens
          }}
          className=" custom-pagination"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full  lg:h-[570px] flex justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400} // Adjust width based on your design
                  height={400} // Adjust height based on your design
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
