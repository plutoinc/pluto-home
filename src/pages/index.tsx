import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HomeHero from "@/components/home/Hero";
import BlogSection from "@/components/home/Sections/Blog";
import HomeSection1 from "@/components/home/Sections/Section1";
import HomeSection2 from "@/components/home/Sections/Section2";
import HomeSection3 from "@/components/home/Sections/Section3";
import HomeSection4 from "@/components/home/Sections/Section4";
import HomeSection5 from "@/components/home/Sections/Section5";
import HomeSection6 from "@/components/home/Sections/Section6";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PlutoLabs</title>
      </Head>
      <Header />
      <div className="text-black bg-gradient-to-b from-[#f4f9ff] from-0% to-[#f4f9ff] to-100%">
        <HomeHero />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <BlogSection />
      </div>
      <Footer />
    </>
  );
}
