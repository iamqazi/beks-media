import Image from "next/image";
import FutureAnimation from "./insightAnimation";
import EmailInput from "./input";

export default function Insight() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full py-16 md:py-20">
      <FutureAnimation />

      <section
        aria-label="AI-Driven Decentralized Finance Section"
        className="relative w-full min-h-[500px] text-white flex justify-center items-center px-4 sm:px-8"
      >
        {/* Background Image */}

        <div className="absolute inset-0 bg-[url('/insight.png')] bg-cover bg-center bg-no-repeat">
          <Image
            src="/horse1.png"
            alt="Magical horse"
            height={430}
            width={560}
            objectFit="contain"
            className="z-10 md:w-[350px] md:bottom-[70px] hidden md:flex md:right-0 lg:right-[70px] lg:bottom-[70px] xl:bottom-[20px] xl:w-[560px] xl:h-[430px] xl:right-[95px] lg:w-[450px] absolute md:bottom-15"
          />
        </div>

        {/* Content */}
        <div className="relative px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center w-full max-w-6xl">
          {/* Left Content - Text and Form */}
          <div className="w-full md:w-3/5 py-6 md:py-12 flex flex-col items-center md:items-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-center md:text-left mb-2 lg:mb-6">
              WANT CUTTING-
              <br />
              EDGE Web 3.0
              <br />
              INSIGHTS?
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg mb-2 lg:mb-6 text-center md:text-left">
              Subscribe to our newsletter and never miss an update!
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-4">
              <EmailInput />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
