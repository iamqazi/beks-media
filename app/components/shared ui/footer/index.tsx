// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#101010] relative text-white w-full"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-30 w-full h-full absolute top-0  border-white/45 border-t-[1px] left-0 z-0"></div>

      <Image
        src={"/footerblur.png"}
        alt="Beks Media Logo"
        width={550}
        height={50}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-[550px] z-10"
      />

      <div className="container mx-auto px-4 py-[40px] relative z-10 ">
        {/* Rest of your footer content */}
        <div className="flex flex-col md:flex-row justify-between border-b-[1px] border-white/45 pb-[42px] items-start mb-12">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 max-w-md">
            <div className="mb-4">
              <Image
                src={"/logo.png"}
                alt="Beks Media Logo"
                width={150}
                height={50}
              />
            </div>
            <p className="text-gray-400 font-inter mb-6">
              We transform Web 3 startups into iconic brands through strategic
              storytelling and marketing.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/beksmedia"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Image
                  src={"/facebook.png"}
                  alt="Facebook"
                  width={34}
                  height={34}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rebekah-jenkins-0739b051/"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Image
                  src="/linkedin.png"
                  alt="Instagram"
                  width={34}
                  height={34}
                />
              </Link>
              <Link
                href="https://www.instagram.com/beks.media/"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Image src="/insta.png" alt="Twitter" width={34} height={34} />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Image src="/be.png" alt="YouTube" width={34} height={34} />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Image src="/globe.png" alt="LinkedIn" width={34} height={34} />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <nav className="flex font-inter flex-col space-y-3">
              <Link
                href="/"
                className="hover:text-blue-400 font-inter transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-400 font-inter transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-blue-400 font-inter transition-colors"
              >
                Portfolio
              </Link>
            </nav>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/article"
                className="hover:text-blue-400 font-inter transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="https://calendly.com/beksmedia/beks-media-meeting?month=2025-04"
                className="hover:text-blue-400 font-inter transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
      </div>
      <div className="container mx-auto px-4 mb-[80px] flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
        {/* Statue with blue bar */}
        <div className="relative h-64 md:h-[300px] w-40 md:w-[120px]">
          <div className="relative h-full w-full">
            <Image
              src="/footer-img.png"
              alt="Classical statue"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
            {/* Blue bar across eyes */}
            <div className="absolute top-1/4 w-full h-8 md:h-12 bg-blue-700 z-10"></div>
          </div>
        </div>

        {/* Text section */}
        <div className=" text-[32px] md:text-[50px] font-[800] tracking-tighter ml-0 md:ml-4">
          <div className="flex  ">
            <span className="text-[#ACACAC]">B </span>
            <span className="text-[#47454C] ml-3"> RANDING</span>
          </div>
          <div className="flex">
            <span className="text-[#ACACAC]">E</span>
            <span className="text-[#47454C] ml-3">VERY</span>
          </div>
          <div className="flex">
            <span className="text-[#ACACAC]">K</span>
            <span className="text-[#47454C] ml-3">NOWN</span>
          </div>
          <div className="flex">
            <span className="text-[#ACACAC]">S</span>
            <span className="text-[#47454C] ml-3">TORY</span>
          </div>
        </div>
      </div>
      <div className="text-center pt-6 pb-2 font-inter text-sm text-gray-400 relative z-10">
        © Copyright 2025 Beks Media
      </div>
    </footer>
  );
};

export default Footer;
