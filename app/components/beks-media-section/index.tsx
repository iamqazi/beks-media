import React from "react";
import Image from "next/image";
import ButtonImage from "../shared ui/button";
import Link from "next/link";

const BeksMediaNumbers: React.FC = () => {
  const handleClick = () => {};
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-black w-full py-[150px] md:py-[140px]">
        <div className="mx-auto px-4">
          {/* Title */}
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-[70px] tracking-wider">
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
                  objectFit="contain"
                  className="rounded"
                />
              </div>

              {/* YouTube Stats */}
              <div className="mt-8">
                <p className="text-white text-[24px] font-inter text-center md:text-left">
                  📈{" "}
                  <span className="font-[800] font-inter italic ">
                    3M+ views on YouTube
                  </span>{" "}
                  in 4 weeks with “Rebekah Jenkins Consulting” the business
                  advisory branch of our business.
                  <a
                    target="blank"
                    href="https://www.youtube.com/@rebekah.Jenkins"
                    className="text-[#E85E66] font-inter whitespace-normal font-light"
                  >
                    (https://www.youtube.com/ @rebekah.Jenkins)
                  </a>
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-col gap-6">
              {/* Top Two Cards */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Project Advisory Card */}
                <div
                  style={{
                    borderImageSource:
                      "linear-gradient(94.9deg, rgba(255, 255, 255, 0.15) 16%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.15) 37%)",
                    borderImageSlice: 1,
                  }}
                  className="bg-zinc-900  overflow-hidden p-[22px] border-[0.94px] border-transparent relative w-full md:h-[318px]  md:w-[385px]"
                >
                  <div className="relative h-[175px] w-full mb-2">
                    <Image
                      src="/poster1.png"
                      alt="Project Advisory"
                      layout="fill"
                      className="rounded object-contain "
                    />
                  </div>
                  <p className="text-white font-inter text-[24px] text-center md:text-left">
                    🎯{" "}
                    <span className="font-[800] font-inter italic">$250M+</span>{" "}
                    real world assets project advisory
                  </p>
                </div>

                {/* Years of Service Card */}
                <div
                  style={{
                    borderImageSource:
                      "linear-gradient(94.9deg, rgba(255, 255, 255, 0.15) 16%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.15) 37%)",
                    borderImageSlice: 1,
                  }}
                  className=" overflow-hidden p-[22px] border-[0.94px] h-[318px] relative w-full md:max-w-[385px] 
                 bg-[url('/blue.png')] bg-cover bg-center"
                >
                  <div className="relative h-[175px] w-full mb-2">
                    <Image
                      src="/poster2.png"
                      alt="Project Advisory"
                      layout="fill"
                      className="rounded object-contain "
                    />
                  </div>
                  <p className="text-white font-inter text-[24px] text-center md:text-left">
                    <span className="font-[800] font-inter italic">
                      9 years
                    </span>{" "}
                    of delivering results and serving our customers
                  </p>
                </div>
              </div>

              {/* World Market Leaders Card */}
              <div
                style={{
                  borderImageSource:
                    "linear-gradient(94.9deg, rgba(255, 255, 255, 0.15) 16%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.15) 37%)",
                  borderImageSlice: 1,
                }}
                className="bg-zinc-900 border relative w-full p-6 md:p-8 overflow-hidden lg:w-[800px]"
              >
                <div className="flex flex-col sm:items-center md:flex-row md:justify-between md:items-center">
                  <div className="z-10 text-center sm:text-left">
                    <h2 className="text-white font-inter italic text-3xl md:text-[24px] font-bold leading-tight">
                      2 World Market Leaders -
                    </h2>
                    <p className="text-white font-inter text-[24px] mt-2 mb-6">
                      managing multinational campaigns
                      <br className="hidden font-inter md:block" />
                      in multiple languages
                    </p>
                    <Link href="/portfolio" className="cursor-pointer mb-8">
                      <ButtonImage
                        icon="/new.png"
                        text="See Our Work"
                        onClick={handleClick}
                      />
                    </Link>
                  </div>

                  <div className="relative md:top-0 mt-10 md:mt-0 z-0 md:z-10">
                    <div className="w-full h-full md:w-[340px] md:h-[220px] flex justify-center">
                      <Image
                        src="/image33.png"
                        alt="Sunray Coin"
                        layout="intrinsic"
                        width={286}
                        height={190}
                        className="rounded w-full h-full object-cover"
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
