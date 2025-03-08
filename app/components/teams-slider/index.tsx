"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Define type for team member
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "ANDREA WINKLER",
    role: "Chief Public Affairs Officer (CPAO)",
    imageUrl: "/slider.png",
  },
  {
    name: "tan bahar",
    role: "European Strategic Advisor and Creative Director.",
    imageUrl: "/slider2.png",
  },
  {
    name: "MARVIN BRACKROCK",
    role: "Lead Programmer and Chief Technology Advisor.",
    imageUrl: "/slider3.png",
  },
  {
    name: "SELENE MASAT",
    role: "Graphic Designer and Social Media Manager.",
    imageUrl: "/slider4.png",
  },
  {
    name: "MANUEL VERRASTRO",
    role: "Programmer and full stack developer.",
    imageUrl: "/slider5.png",
  },
];
const teamMember = [
  {
    name: "Julie Jenkins",
    role: "USA Regional Manager",
    image: "/team1.png", // Replace with the actual path
  },
  {
    name: "Joachim Hartkopf",
    role: "Key-Account-Manager",
    image: "/team2.png", // Replace with the actual path
  },
];
const TeamSlider: React.FC = () => {
  return (
    <>
      {" "}
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-20">
        OUR TEAM
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center mb-[100px] gap-6 px-6">
        {teamMember.map((member, index) => (
          <div key={index} className="relative md:w-[400px] w-full">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h3 className="text-white whitespace-normal text-[25px] font-bold">
                {member.name}
              </h3>
              <p className="text-gray-300 font-sans text-[24px]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#000]  flex items-center justify-center p-4">
        <div className="w-full max-w-7xl">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              // Small screens (mobile) - Only 1 image should be visible
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false, // Ensures only one image is visible
              },
              // Tablets
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              // Large screens
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1300: {
                slidesPerView: 5,
                spaceBetween: 20,
                centeredSlides: true,
              },
            }}
            className="w-full py-12"
            style={{
              borderImageSource:
                "linear-gradient(94.9deg, rgba(255, 255, 255, 0.15) 16%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.15) 37%)",
              borderImageSlice: 1,
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide
                key={index}
                className="!w-[340px] !h-[450px] 
                max-sm:!w-[250px] max-sm:!h-[350px] 
                max-md:!w-[300px] max-md:!h-[400px] 
                overflow-hidden rounded-lg shadow-lg relative"
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 340px"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end items-start text-white p-4 text-left 
                max-sm:p-2 max-sm:text-sm 
                max-md:p-3"
                >
                  <h3 className="text-white text-[24px] font-bold">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 font-sans text-[18px]">
                    {member.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination mt-4" />
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TeamSlider;
