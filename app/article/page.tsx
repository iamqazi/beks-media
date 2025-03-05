import { NextPage } from "next";
import ArticleHero from "../components/portfolio-Article";
import BlogCards from "../components/blog";
import Insight from "../components/insights";
import Footer from "../components/shared ui/footer";

const LandingPage: NextPage = () => {
  return (
    <>
      <div className="bg-black max-w-[]">
        <ArticleHero />
        <BlogCards />
        <Insight />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
