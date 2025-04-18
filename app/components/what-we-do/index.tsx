"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const WhatWeDoSection: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "BRANDING & STORYTELLING",
      description: "Build unforgettable narratives",
      imageSrc: "/image-1.png",
    },
    {
      id: 2,
      title: "GROWTH & COMMUNITY ENGAGEMENT",
      description: "Organic & viral strategies",
      imageSrc: "/image-2.png",
    },
    {
      id: 3,
      title: "CAMPAIGN EXECUTION & SCALE",
      description: "Go-to-market & Web 3advertising",
      imageSrc: "/image-3.png",
    },
    {
      id: 4,
      title: "WEBSITE DESIGN & PROGRAMMING",
      description: "UX/UI-focused Web 3& startup sites",
      imageSrc: "/image-4.png",
    },
    {
      id: 5,
      title: "GOOGLE SEO & OPTIMIZATION",
      description: "Boost search rankings & online visibility",
      imageSrc: "/image-5.png",
    },
    {
      id: 6,
      title: "SOCIAL MEDIA MANAGEMENT",
      description: "Content, strategy & engagement",
      imageSrc: "/image-6.png",
    },
    {
      id: 7,
      title: "BUSINESS & MARKETING ADVISORY",
      description: "(via Rebekah Jenkins Consulting)",
      imageSrc: "/image-7.png",
    },
    {
      id: 8,
      title: "KEYNOTE SPEAKER",
      description: "(via Rebekah Jenkins Consulting)",
      imageSrc: "/image-8.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b my-20 from-[#061226] to-[#030307] text-white py-16 px-4 min-h-screen md:px-8 lg:px-16 rounded-tl-[30px] rounded-tr-[30px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-[48px] font-[800] mb-16 text-center tracking-wider">
          WHAT WE DO
        </h2>

        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) rowRefs.current[index] = el;
              }}
              className="group border-t border-[#403E44] py-6 md:py-8 cursor-pointer relative transition-all duration-300 hover:bg-[#1A1A1A]"
              onMouseEnter={() => setHoveredImage(service.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Responsive Text Size */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[34px] font-[800] leading-[40px] tracking-wider mb-2 md:mb-0 md:max-w-[50%]">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-right font-inter text-gray-400 md:max-w-[50%]">
                  {service.description}
                </p>
              </div>

              {/* Lowered Image Placement on Hover */}
              {hoveredImage === service.id && (
                <div className="absolute inset-0 flex items-center justify-end z-10 pointer-events-none">
                  <div className="relative w-42 h-44  md:w-48 md:h-32 lg:w-[300px] lg:h-[270px] right-0 md:right-1/3 top-2/3 transform -translate-y-[40%] -rotate-12 transition-transform duration-300">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={340}
                      height={210}
                      objectFit="contain"
                      className="rounded-md w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
