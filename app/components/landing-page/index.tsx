import { NextPage } from "next";
import HeroSection from "../hero-section";
import WhatWeDoSection from "../what-we-do";
import BusinessSection from "../business-section";
import BeksMediaNumbers from "../beks-media-section";
import Footer from "../shared ui/footer";
import Insight from "../insights";
import BannerAnimation from "../banner-slider";

const LandingPage: NextPage = () => {
  return (
    <>
      <div className="bg-black max-w-[]">
        <HeroSection />
        <WhatWeDoSection />
        <BusinessSection />
        <BeksMediaNumbers />
        <BannerAnimation />
        <Insight />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
