"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

const teamMembers = [
  {
    name: "ANDREA WINKLER",
    role: "Chief Public Affairs Officer (CPAO)",
    imageUrl: "/team1.png",
  },
  {
    name: "TAN BAHAR",
    role: "European Strategic Advisor and Creative Director.",
    imageUrl: "/team2.png",
  },
  {
    name: "MARVIN BRACKROCK",
    role: "Lead Programmer and Chief Technology Advisor.",
    imageUrl: "/team3.png",
  },
  {
    name: "SELENE MASAT",
    role: "Graphic Designer and Social Media Manager.",
    imageUrl: "/team4.png",
  },
  {
    name: "MANUEL VERRASTRO",
    role: "Programmer and Full Stack Developer.",
    imageUrl: "/team5.png",
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
const TeamSlider = () => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = () => {
    sliderRef.current?.swiper?.slidePrev();
  };

  const handleNext = () => {
    sliderRef.current?.swiper?.slideNext();
  };

  return (
    <>
      {" "}
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-20">
          OUR TEAM
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center mb-[100px] gap-6 px-6">
          {teamMember.map((member, index) => (
            <div key={index} className="relative w-full md:w-1/3">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="text-white text-lg font-bold">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-4 py-16">
        <div className="relative">
          <Swiper
            spaceBetween={27}
            slidesPerView={1}
            className="!pb-8"
            ref={sliderRef}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]} // Add Autoplay module
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full flex flex-col items-center text-center">
                  <Image
                    src={member.imageUrl}
                    width={300}
                    height={450}
                    alt={member.name}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end  p-4 text-white">
                    <h3 className="text-white text-[32px] font-bold">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-[24px]">{member.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div
            className="flex h-[3.125rem] w-[3.125rem] cursor-pointer items-center justify-center rounded-full border border-white"
            onClick={handlePrev}
          >
            <ArrowLeft stroke="white" />
          </div>
          <div
            className="flex h-[3.125rem] w-[3.125rem] cursor-pointer items-center justify-center rounded-full border border-white bg-white"
            onClick={handleNext}
          >
            <ArrowRight className="text-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSlider;
