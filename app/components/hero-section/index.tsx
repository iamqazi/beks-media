// pages/index.tsx
"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import ButtonImage from "../shared ui/button";

const HeroSection: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/bg.png"
          alt="Space background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Unicorn silhouette on the bottom left */}
      <div className="absolute bottom-40 left-2 z-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
        <Image
          src="/horse.png"
          alt="Unicorn silhouette"
          width={130}
          height={130}
          objectFit="contain"
        />
      </div>
      <div className="absolute top-0 left-0 z-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[480px] md:h-[480px]">
        <Image
          src="/blur.png"
          alt="Blur effect"
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 md:px-8">
        {/* Header */}
        <header className="p-4 md:p-8 flex justify-between items-center">
          <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
            BEKS
            <br />
            MEDIA
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
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
        </header>

        {/* Main content */}
        <main className="flex-grow flex flex-col justify-center items-center text-center p-4 md:p-8">
          <h1 className="text-white text-5xl sm:text-6xl md:text-9xl font-bold tracking-wider">
            BEKS
          </h1>
          <h1 className="text-gray-500 text-5xl sm:text-6xl md:text-9xl font-bold tracking-wider">
            MEDIA
          </h1>
        </main>

        {/* "SEE OUR WORK" text */}
        <div className="absolute -right-6 sm:-right-10 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="text-white text-sm sm:text-lg font-bold transform rotate-90 flex items-center">
            SEE OUR WORK
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 ml-2 transform rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mx-4 sm:mx-12 md:mx-[97px] text-center md:text-left">
          <div className="flex flex-col mb-6 md:mb-0">
            <div className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              YOUR INNOVATION
              <br />
              DESERVES RECOGNITION.
            </div>
            <p className="text-white text-base sm:text-lg md:text-xl mb-6 md:mb-16 max-w-2xl">
              We transform Web3 startups into iconic brands through strategic
              storytelling and marketing.
            </p>
          </div>
          <div className="mb-8">
            <ButtonImage text="Work With Us" onClick={handleClick} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
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
            <ul className="text-white text-lg sm:text-2xl space-y-4 sm:space-y-6">
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
  );
};

export default HeroSection;
