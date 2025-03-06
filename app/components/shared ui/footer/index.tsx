// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] relative text-white w-full">
      <Image
        src="/footerblur.png"
        alt="Beks Media Logo"
        width={550}
        height={50}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-[550px]"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 max-w-md">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Beks Media Logo"
                width={150}
                height={50}
              />
            </div>
            <p className="text-gray-400 font-sans mb-6">
              We transform Web 3.0 startups into iconic brands through strategic
              storytelling and marketing.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/beksmedia"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Image
                  src="/facebook.png"
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
            <nav className="flex font-sans flex-col space-y-3">
              <Link
                href="/"
                className="hover:text-blue-400 font-sans transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-400 font-sans transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-blue-400 font-sans transition-colors"
              >
                Portfolio
              </Link>
            </nav>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/article"
                className="hover:text-blue-400 font-sans transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-400 font-sans transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
            JOIN US TODAY
          </h2>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 pb-2 font-sans text-sm text-gray-400">
          © Copyright 2025 Beks Media
        </div>
      </div>
    </footer>
  );
};

export default Footer;
