// pages/index.tsx
"use client";
import { NextPage } from "next";
import { useState } from "react";
import ButtonImage from "../shared ui/button";
import Image from "next/image";

const PortfolioHero: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/Background2.png"
          alt="Space background"
          layout="fill"
          objectPosition="center"
          priority
        />
      </div>

      {/* Unicorn silhouette - Adjusted for small screens */}
      <div className="absolute bottom-40 left-2 sm:bottom-0 sm:left-0 z-10 w-[180px] h-[180px] sm:w-[320px] sm:h-[320px]">
        <Image
          src="/horse3.png"
          alt="Unicorn silhouette"
          width={230}
          height={320}
          objectFit="contain"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-4 sm:p-6 md:p-8">
          <div className="flex justify-between items-center">
            <Image src={"/logo.png"} height={50} width={120} alt="img" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none p-2"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 text-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[36px] md:text-[70px] lg:text-[128px] text-white font-akira font-[800] leading-tight">
              Portfolio
            </h1>

            {/* Paragraph text */}
            <p className="text-white text-base sm:text-lg md:text-[24px] mt-4 max-w-lg sm:max-w-2xl md:max-w-4xl">
              What sets us apart from other marketing agencies is that our team
              is composed of digital nomads who understand the travel lifestyle.
              We know what works and what just doesn&apos;t cut it. We call our
              team “the crew” and we are an international band
              of wayfinders spread across four continents.
            </p>

            {/* Contact Button */}
            <div className="mt-6 sm:mt-8">
              <ButtonImage text="CONTACT US" onClick={handleClick} />
            </div>
          </div>
        </main>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white focus:outline-none p-2"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="text-center">
              <ul className="text-white text-xl sm:text-2xl space-y-4 sm:space-y-6">
                <li>
                  <a
                    href="#"
                    className="hover:text-red-600 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-600 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-600 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-600 transition duration-300"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-600 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioHero;
