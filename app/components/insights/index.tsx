import Image from "next/image";
import FutureAnimation from "./insightAnimation";

export default function Insight() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full lg:min-h-[770px] md:min-h-[600px] sm:min-h-[550px] min-h-[450px] py-20">
      <FutureAnimation />

      <section
        aria-label="AI-Driven Decentralized Finance Section"
        className="relative w-full text-white px-[10px] sm:px-[80px] xl:px-[170px] flex justify-center"
      >
        <div
          className="w-full max-w-6xl overflow-hidden border border-[#ABABAB] shadow-[0px_1px_91.5px_0px_#DC2F3954]"
          style={{
            background:
              "radial-gradient(83.55% 326.23% at 98.83% 101.52%, #DC2F39 0%, #18529D 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Content - Text and Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col items-center md:items-start justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider text-center md:text-left mb-6">
                WANT CUTTING-
                <br />
                EDGE WEB3
                <br />
                INSIGHTS?
              </h1>

              <p className="text-white text-lg md:text-xl mb-8 text-center md:text-left">
                Subscribe to our newsletter and never miss an update!
              </p>

              <div className="w-full flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-6 py-3 rounded-lg bg-blue-800/50 border border-blue-400/30 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="whitespace-nowrap bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
                  Join Us Today
                </button>
              </div>
            </div>

            {/* Right Content - Unicorn Image */}
            <div className="hidden lg:flex w-full md:w-2/5 justify-center md:justify-end">
              <div className="relative bottom-0 h-64 sm:h-80 md:h-full w-full">
                <Image
                  src="/horse1.png"
                  alt="Magical unicorn"
                  layout="fill"
                  objectFit="contain"
                  className="transform scale-90 !absolute !top-[20px] md:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
