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

        {/* Content */}
        <div className="relative border border-white/60 h-[260px] rounded-[8px] px-4 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center w-full max-w-[1280px]">
          {/* Left Content - Text and Form */}
          <div className="w-full  py-6 md:py-12 flex flex-col items-center ">
            <h1 className="text-[24px] max-w-[900px] md:-[32px] font-[800] leading-[30px] text-center  mb-[24px]">
              Subscribe to our newsletter and never miss an update!
            </h1>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
              <EmailInput />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
