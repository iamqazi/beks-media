"use client";

import { usePathname } from "next/navigation";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const HeroSection: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {};
  const pathname = usePathname();

  // Fix: Use string instead of 'any' for type safety
  const isActive = (path: string) =>
    pathname === path
      ? "text-red-600"
      : "hover:text-gray-300 transition duration-300";

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* <AnimatedBackground /> */}
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={"/bg.png"}
          alt="Space background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Unicorn silhouette on the bottom left */}
      <div className="absolute bottom-[420px] left-2 z-10 w-[300px] h-[224px]">
        <Image
          src={"/horse.png"}
          alt="Unicorn silhouette"
          width={200}
          height={124}
          objectFit="contain"
        />
      </div>
      <div className="absolute top-0 left-0 z-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[480px] md:h-[480px]">
        <Image
          src={"/blur.png"}
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
            <Image
              src={"/logo.png"}
              alt="Blur effect"
              width={122}
              height={50}
              objectFit="contain"
            />
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
          <Image
            src={"/text.svg"}
            width={100}
            height={100}
            alt="img"
            className="w-[1200px] h-[650px] "
          />
        </main>

        {/* "SEE OUR WORK" text */}
        <Link href="/portfolio">
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden md:block cursor-pointer">
            <div className=" flex items-center transform -rotate-90 tracking-wider">
              <Image
                src={"/Vector.png"}
                height={27}
                width={35}
                alt="icon"
                className="mr-3 rotate-90"
              />
              <span className="text-[#DC2F39] text-[24px] font-[800] ">
                {" "}
                SEE OUR WORK
              </span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col lg:flex-row justify-between items-center mx-4  md:mx-[97px] text-center md:text-left">
          <div className="flex flex-col mb-6 md:mb-0">
            <div className="text-white leading-[44px] text-[28px] md:text-[40px] font-[800] mb-4 ">
              YOUR INNOVATION
              <br />
              DESERVES RECOGNITION
            </div>
            <p className="text-white text-base font-sans text-[18px] md:text-[24px] mb-6 md:mb-16 max-w-2xl">
              We transform Web 3.0 startups into iconic brands through strategic
              storytelling and marketing.
            </p>
          </div>
          <Link
            href="https://calendly.com/beksmedia/beks-media-meeting?month=2025-04"
            className="mb-8 cursor-pointer"
          >
            <Image
              onClick={handleClick}
              src={"/newbtn.png"}
              height={72}
              width={300}
              alt="img"
            />
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#061226] to-[#030307] z-50 flex flex-col items-center justify-center text-center">
          {/* Background Image */}
          <Image
            src="/dots.png"
            alt="Background Dots"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-50"
          />

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-[30px] right-[80px] text-white z-10 focus:outline-none"
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

          {/* Logo */}
          <div className="absolute top-[30px] left-[80px] z-10">
            <Image
              src="/logo.png"
              alt="Beks Media Logo"
              width={80}
              height={80}
            />
          </div>

          {/* Menu Items */}
          <nav className="z-10">
            <ul className="text-white text-3xl sm:text-4xl font-bold space-y-6">
              <li>
                <Link href="/" className={isActive("/")}>
                  BEKS MEDIA
                </Link>
              </li>
              <li>
                <Link href="/about" className={isActive("/about")}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={isActive("/portfolio")}>
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="/article" className={isActive("/article")}>
                  BLOGS
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <p className="absolute bottom-4 text-white text-sm z-10">
            © Copyright 2025 Beks Media
          </p>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
