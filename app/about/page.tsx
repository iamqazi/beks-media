import { NextPage } from "next";
import DynamicHeroSection from "../components/dynamic-hero-section";
import TeamSection from "../components/team";
import Insight from "../components/insights";
import Footer from "../components/shared ui/footer";
import TeamSlider from "../components/teams-slider";
import DevelopmentProcessSm from "../components/teams-slider/slider-sm";

const LandingPage: NextPage = () => {
  return (
    <>
      <div className="bg-black max-w-[]">
        <DynamicHeroSection />
        <TeamSection />
        <div className="hidden md:block">
          <TeamSlider />
        </div>

        <div className="block md:hidden">
          <DevelopmentProcessSm />
        </div>

        <Insight />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
