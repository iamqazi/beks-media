import Image from "next/image";
import React from "react";

// Define the portfolio item data type
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  services: string[];
}

// Portfolio data matching the image
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "TMN Global",
    description:
      "Website re-design for TMN Global. Creating new dynamic brand elements and promoting their uses for the perfect website refresh.",
    image: "/portfolio1.png",
    services: ["Website Re-design"],
  },
  {
    id: 2,
    title: "FL Media Solutions",
    description:
      "Social media content and designed to level your brand and empowering your influencers.",
    image: "/portfolio2.png",
    services: ["Social Media Design"],
  },
  {
    id: 3,
    title: "Cryptowoman Conference",
    description:
      "Website developed and designed for the Cryptowoman Conference held in Tbilisi, Georgia, Jan 2021.",
    image: "/portfolio3.png",
    services: ["Website Design", "Event Planning"],
  },
  {
    id: 4,
    title: "Cryptowoman Conference",
    description: "A perfect pace and colors to generate the conference vibe.",
    image: "/portfolio4.png",
    services: ["Print Graphics"],
  },
  {
    id: 5,
    title: "Woman in the Power",
    description: "Celebrating women for their brilliance and drive.",
    image: "/portfolio5.png",
    services: ["Sticker Design"],
  },
  {
    id: 6,
    title: "Color Pop Marketing",
    description:
      "Social media content and designed to level your brand and empowering your influencers.",
    image: "/portfolio6.png",
    services: ["Social Media Design"],
  },
];

const PortfolioUI: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative  ">
      {portfolioData.map((item, index) => (
        <div key={item.id} className="relative ">
          {/* Large Background Number */}
          <div className="absolute font-sans font-[900] top-10 left-1/2  text-[60px] md:text-[80px] lg:text-[120px] text-[#403E44] z-0">
            {`0${index + 1}`}
          </div>

          {/* Project Content */}
          <div className="container mx-auto px-4 py-16 md:py-20 border-b-[2px] border-[#403E44] relative z-10">
            <div className="flex flex-col lg:flex-row items-end">
              {/* Project Image */}
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <Image
                  height={570}
                  width={610}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-h-[500px]  object-contain"
                />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
                <h2 className="text-2xl md:text-[38px] font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-300 font-sans mb-6 text-[16px] md:text-lg">
                  {item.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4">
                  <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                    {item.services.map((service) => (
                      <button
                        key={service}
                        className="bg-[#000] w-fit px-4 py-2 border border-[#403E44] rounded-full text-xs md:text-sm hover:bg-white/20 transition inline-block"
                      >
                        {service}
                      </button>
                    ))}
                  </div>

                  {/* View Work Button */}
                  <button className="bg-[#15131A] w-[187px] h-[56px] p-2 rounded-full inline-flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#18529D] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="text-white pr-4 text-base">
                      View our Work
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioUI;
