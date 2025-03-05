// components/WhatWeDoSection.tsx
import React, { useState, useRef } from "react";
import Image from "next/image";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const WhatWeDoSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);
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
      description: "Go-to-market & Web 3.0 advertising",
      imageSrc: "/image-3.png",
    },
    {
      id: 4,
      title: "WEBSITE DESIGN & PROGRAMMING",
      description: "UX/UI-focused Web 3.0 & startup sites",
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

  const handleRowClick = (id: number) => {
    setActiveImage(activeImage === id ? null : id);
  };

  // Initialize refs array
  if (rowRefs.current.length !== services.length) {
    rowRefs.current = Array(services.length).fill(null);
  }

  return (
    <div className="bg-gradient-to-b my-20 from-[#061226] to-[#030307] text-white py-16 px-4 min-h-screen md:px-8 lg:px-16 rounded-tl-[30px] rounded-tr-[30px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-wider">
          WHAT WE DO
        </h2>

        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) rowRefs.current[index] = el;
              }}
              className="border-t border-[#403E44] py-6 md:py-8 cursor-pointer relative"
              onClick={() => handleRowClick(service.id)}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mb-2 md:mb-0">
                  {service.title}
                </h3>
                <p className="text-sm  text-right font-sans md:text-base lg:text-lg text-gray-400">
                  {service.description}
                </p>
              </div>

              {/* Show image overlaid on this specific row */}
              {activeImage === service.id && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div
                    className="absolute right-0 md:right-1/4 top-1/2 transform -translate-y-1/2 -rotate-12"
                    style={{ zIndex: 20 }}
                  >
                    <div className="relative w-48 h-36 md:w-64 md:h-48">
                      <Image
                        src={service.imageSrc}
                        alt={service.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                      />
                    </div>
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
