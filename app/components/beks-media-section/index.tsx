import React from "react";
import Image from "next/image";

const BeksMediaNumbers: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-black w-full py-16">
        <div className="mx-auto px-4">
          {/* Title */}
          <h2 className="text-white text-5xl font-bold text-center mb-16 tracking-wider">
            BEKS MEDIA IN NUMBERS
          </h2>

          {/* Main Container */}
          <div className="flex xl:flex-row md:flex-col flex-col justify-center gap-6">
            {/* First Card */}
            <div
              className="bg-[#101010] rounded-lg overflow-hidden p-[22px] border-[0.94px] border-transparent relative w-full md:w-[452px]"
              style={{
                borderImageSource:
                  "linear-gradient(94.9deg, rgba(255, 255, 255, 0.15) 16%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.15) 37%)",
                borderImageSlice: 1,
              }}
            >
              <div className="relative h-64 md:h-[300px] w-full mb-6">
                <Image
                  src="/image44.png"
                  alt="Mobile App Designs"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>

              {/* YouTube Stats */}
              <div className="mt-8">
                <p className="text-white text-[24px] text-center md:text-left">
                  📈 <span className="font-[800]">3M+ views on YouTube</span> in
                  4 weeks with “Rebekah Jenkins Consulting” the business
                  advisory branch of our business.
                  <span className="text-red-700 whitespace-normal font-light">
                    (https://www.youtube.com/ @rebekah.Jenkins)
                  </span>
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-col gap-6">
              {/* Top Two Cards */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Project Advisory Card */}
                <div className="bg-zinc-900 rounded-lg overflow-hidden p-[22px] border-[0.94px] border-transparent relative w-full  md:w-[385px]">
                  <div className="relative h-64 w-full mb-2">
                    <Image
                      src="/image11.png"
                      alt="Project Advisory"
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <p className="text-white text-[24px] text-center md:text-left">
                    🎯 <span className="font-[800]">$250M+</span> real world
                    assets project advisory
                  </p>
                </div>

                {/* Years of Service Card */}
                <div className="bg-blue-900 rounded-lg overflow-hidden p-[22px] border-[0.94px] border-transparent relative w-full md:max-w-[385px]">
                  <div className="relative h-64 w-full mb-2">
                    <Image
                      src="/image5.png"
                      alt="Years of Service"
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <p className="text-white text-[24px] text-center md:text-left">
                    <span className="font-[800]">9 years</span> of delivering
                    results and serving our customers
                  </p>
                </div>
              </div>

              {/* World Market Leaders Card */}
              <div className="bg-zinc-900 relative w-full p-6 md:p-8 overflow-hidden lg:w-[800px]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="z-10">
                    <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                      2 World Market Leaders
                    </h2>
                    <p className="text-white text-xl mt-2 mb-6">
                      managing multinational campaigns
                      <br className="hidden md:block" />
                      in multiple languages
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center border border-white text-white py-3 px-6 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      SEE OUR WORK
                    </a>
                  </div>

                  <div className="absolute right-0 top-6 hidden xl:block md:relative md:top-0 md:mt-0 z-0 md:z-10">
                    <div className="relative w-[240px] h-[140px] md:w-[320px] md:h-[180px]">
                      <Image
                        src="/image33.png"
                        alt="Sunray Coin"
                        layout="fill"
                        objectFit="cover"
                        className="rounded !h-[190px] absolute right-0 !w-[286px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeksMediaNumbers;
