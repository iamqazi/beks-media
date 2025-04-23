"use client";

import BlogCardsSlider from "@/app/small-image-slider"; // Assuming this is the updated BlogCards component
import Link from "next/link";
import React from "react";

// Define the slider image type
interface SliderImage {
  src: string;
  alt: string;
}

// Define the portfolio item data type
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string; // Main portfolio image (optional, not used in slider here)
  services: string[];
  sliderImages: SliderImage[]; // Unique slider images for each portfolio
}

// Portfolio data with unique slider images
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Branding & Storytelling",
    description:
      "Astorvia (tokenized real world assets). We did naming of company, logo, brand messaging, brand guidelines, and 30+ page marketing research and strategy development for their product launch.",
    image: "/portfolio1.png",
    services: ["Website Re-design"],
    sliderImages: [
      { src: "/loin.png", alt: "TMN Slide 1" },
      { src: "/slider-1-2.png", alt: "TMN Slide 2" },
      { src: "/slider-1-3.png", alt: "TMN Slide 3" },
      { src: "/slider-1-4.png", alt: "TMN Slide 3" },
    ],
  },
  {
    id: 2,
    title: "FL Media Solutions",
    description:
      "Social posts created and designed to boost your brand and emphasize your online presence.",
    image: "/portfolio2.png",
    services: ["Social Media Design"],
    sliderImages: [{ src: "/portfolio2.png", alt: "TMN Slide 3" }],
  },
  {
    id: 3,
    title: "Go-to-Market Strategy",
    description:
      "For NaviAI, we crafted a 30+ page research and strategy plan, 100s of users onboarded within 1st month, and steady organic growth over a 3-month launch period.",
    image: "/portfolio3.png",
    services: ["Website Design", "Event Planning"],
    sliderImages: [
      { src: "/slider-2-1.png", alt: "FL Slide 1" },
      { src: "/slider-2-2.png", alt: "FL Slide 2" },
      { src: "/slider-2-3.png", alt: "FL Slide 3" },
    ],
  },
  {
    id: 4,
    title: "Website Design",
    description:
      "We offer modern website designs with UX/UI and mobile optimized features specially curated for your brand.",
    image: "/portfolio4.png",
    services: ["Print Graphics"],
    sliderImages: [
      { src: "/slider-3-1.png", alt: "Print Slide 1" },
      { src: "/slider-3-2.png", alt: "Print Slide 2" },
      { src: "/slider-3-3.png", alt: "Print Slide 3" },
    ],
  },
  {
    id: 5,
    title: "Viral Growth Hacking",
    description:
      "We launched a sister company to Beks Media, Rebekah Jenkins Consulting and within 6 weeks gained 2000+ subscribers on Youtube and 3.6 million+ views - talk about viral growth!",
    image: "/portfolio5.png",
    services: ["Sticker Design"],
    sliderImages: [
      { src: "/slider-4-1.png", alt: "Women Slide 1" },
      { src: "/slider-4-2.png", alt: "Women Slide 2" },
      { src: "/slider-4-3.png", alt: "Women Slide 3" },
    ],
  },
  {
    id: 6,
    title: "Google Optimization & SEO",
    description:
      "FLMS is ranked #1 best in his city as a small business owner for multiple keywords, now looking to dominate the state of Florida, and he is currently top 5 in Florida thanks to Beks Media. This is not web3 but has been my client for years and he is dominating in the real estate photography & media industry.",
    image: "/portfolio6.png",
    services: ["Social Media Design"],
    sliderImages: [
      { src: "/slider-5-1.png", alt: "Color Pop Slide 1" },
      { src: "/slider-5-2.png", alt: "Color Pop Slide 2" },
      { src: "/slider-5-3.png", alt: "Color Pop Slide 3" },
    ],
  },
  // Add remaining 3 portfolios (total 9) with unique slider images as needed
  {
    id: 7,
    title: "Social Media Management",
    description:
      "We have managed so many accounts over the years. Here are some examples.",
    image: "/portfolio7.png",
    services: ["Branding"],
    sliderImages: [
      { src: "/slider-6-1.png", alt: "Project 7 Slide 1" },
      { src: "/slider-6-2.png", alt: "Project 7 Slide 2" },
      { src: "/slider-6-3.png", alt: "Project 7 Slide 3" },
      { src: "/slider-6-4.png", alt: "Project 7 Slide 3" },
    ],
  },
  {
    id: 8,
    title: "Rebekah Jenkins Consulting",
    description:
      "As a thought leader and public speaker with experience presenting in multiple languages, I bring dynamic insights on blockchain, Web3, AI, marketing, and entrepreneurship to global audiences. Whether you're looking for a keynote speaker or a guest speaker to elevate your event, I am available for hire. Please inquire for speaking opportunities—let’s create an engaging and impactful experience for your audience!",
    image: "/portfolio8.png",
    services: ["UI/UX Design"],
    sliderImages: [
      { src: "/slider-7-1.png", alt: "Project 8 Slide 1" },
      { src: "/slider-7-2.png", alt: "Project 8 Slide 2" },
      { src: "/slider-7-3.png", alt: "Project 8 Slide 3" },
    ],
  },
  {
    id: 9,
    title: "Business and Marketing advisory",
    description:
      "Thats me! That would be these 30+ page customized research & strategy presentations I make. I help guide clients to make better decisions for their marketing directions and brand alignment.",
    image: "/portfolio9.png",
    services: ["Web Development"],
    sliderImages: [
      { src: "/slider-img.png", alt: "Project 9 Slide 1" },
      { src: "/slider-images.png", alt: "Project 9 Slide 2" },
    ],
  },
];

const PortfolioUI: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {portfolioData.map((item, index) => (
        <div key={item.id} className="relative">
          {/* Large Background Number */}
          <div className="absolute font-inter font-[900] top-10 left-1/2 text-[60px] md:text-[80px] lg:text-[120px] text-[#403E44] z-0">
            {`0${index + 1}`}
          </div>

          {/* Project Content */}
          <div className="container mx-auto px-4 py-16 md:py-20 border-b-[2px] border-[#403E44] relative z-10">
            <div className="flex flex-col lg:flex-row items-end">
              {/* Project Slider */}
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <BlogCardsSlider images={item.sliderImages} />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
                <h2 className="text-2xl md:text-[38px] font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-300 font-inter mb-6 text-[16px] md:text-lg">
                  {item.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4">
                  <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                    {item.services.map((service) => (
                      <button
                        key={service}
                        className="bg-[#000] font-inter w-fit px-4 py-2 border border-[#403E44] rounded-full text-xs md:text-sm hover:bg-white/20 transition inline-block"
                      >
                        {service}
                      </button>
                    ))}
                  </div>

                  {/* View Work Button */}
                  <Link
                    href="/portfolio"
                    className="bg-[#15131A] w-[187px] h-[56px] p-2 rounded-full inline-flex items-center space-x-2"
                  >
                    <div className="w-8 h-8 bg-[#18529D] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg" // SVG namespace from W3C
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
                    <span className="text-white pr-4 font-inter text-base">
                      View our Work
                    </span>
                  </Link>
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
