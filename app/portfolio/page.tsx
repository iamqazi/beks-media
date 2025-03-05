import { NextPage } from "next";
import PortfolioHero from "../components/portfolio-hero";
import TMNGlobalUI from "../components/portofolio-section";
import Insight from "../components/insights";
import Footer from "../components/shared ui/footer";

const LandingPage: NextPage = () => {
  return (
    <>
      <div className="bg-black max-w-[]">
        <PortfolioHero />
        <TMNGlobalUI />
        <Insight />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
