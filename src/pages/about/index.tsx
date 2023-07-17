import Analysis from "@/components/about/Analysis";
import ChangeToBring from "@/components/about/ChangeToBring";
import FAQ from "@/components/about/FAQ";
import AboutHero from "@/components/about/Hero";
import VisionMission from "@/components/about/Mission";
import Sponsor from "@/components/about/Sponsor";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div className="text-black bg-[#f4f9ff]">
      <AboutHero />
      <VisionMission />
      <ChangeToBring />
      <Analysis />
      <Sponsor />
      <FAQ />
    </div>
  );
};

export default AboutPage;
