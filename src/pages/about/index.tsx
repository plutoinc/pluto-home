import Footer from "@/components/common/Footer";
import Analysis from "@/components/about/Analysis";
import ChangeToBring from "@/components/about/ChangeToBring";
import FAQ from "@/components/about/FAQ";
import AboutHero from "@/components/about/Hero";
import VisionMission from "@/components/about/Mission";
import Sponsor from "@/components/about/Sponsor";
import Header from "@/components/common/Header";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="text-gray-700 bg-[#f4f9ff]">
        <AboutHero />
        <VisionMission />
        <ChangeToBring />
        <Analysis />
        <Sponsor />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
