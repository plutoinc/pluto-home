import HomeHero from "@/components/home/Hero";
import BlogSection from "@/components/home/Sections/Blog";
import HomeSection1 from "@/components/home/Sections/Section1";
import HomeSection2 from "@/components/home/Sections/Section2";
import HomeSection3 from "@/components/home/Sections/Section3";
import HomeSection4 from "@/components/home/Sections/Section4";
import HomeSection5 from "@/components/home/Sections/Section5";
import HomeSection6 from "@/components/home/Sections/Section6";
import Head from "next/head";
import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

export const Motion: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  // const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   const animation = async () => {
  //     await animate(scope.current, {
  //       opacity: 0,
  //       marginTop: 100,
  //     });
  //     animate(scope.current, { opacity: 100, marginTop: 0 });
  //   };

  //   animation();
  // }, [animate, scope]);

  // return (
  //   <div ref={scope} className={className}>
  //     {children}
  //   </div>
  // );

  return (
    <motion.div
      initial={{ opacity: 0, marginTop: 100 }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      viewport={{ once: true }}
      className={className}
      transition={{ delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>PlutoLabs</title>
      </Head>
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
    </>
  );
}
