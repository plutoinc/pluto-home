import { FC } from "react";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import ValueSection from "./ValueSection";

interface Props {}

const Product: FC<Props> = () => {
  return (
    <main className="text-gray-700">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturesSection />
      <ValueSection />
    </main>
  );
};

export default Product;
