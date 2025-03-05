// components/BusinessSection.tsx
import React from "react";
import Image from "next/image";

const BusinessSection: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute object-cover w-full h-full brightness-50"
        >
          <source src="/videos/castle-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <div className="text-white font-bold text-2xl">
          <Image src={"/logo.png"} alt="img" height={50} width={100} />
        </div>
      </div>

      {/* Main Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider mb-4">
            EVERY BUSINESS HAS
            <br />A STORY TO SHARE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
