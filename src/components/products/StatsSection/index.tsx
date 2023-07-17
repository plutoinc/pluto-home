import PaddingDiv from "@/components/common/PaddingDiv";
import PublicationStatsIcon from "@/components/icons/PublicationsStatIcon";
import { FC, useEffect, useRef, useState } from "react";
import StatCard from "./StatCard";
import CountryStatIcon from "@/components/icons/CountryStatIcon";
import UserStatIcon from "@/components/icons/UserStatIcon";
import { useSequenceAnimation } from "@/components/hooks/useSequenceAnimation";

interface Props {}

const StatsSection: FC<Props> = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const sequenceAnimate = useSequenceAnimation({ repeat: 0 });

  const wrapperRef = useRef(null);

  const countriesRef = useRef<HTMLDivElement>(null);
  const publicationsRef = useRef<HTMLDivElement>(null);
  const usersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          sequenceAnimate([
            { ref: countriesRef },
            { ref: publicationsRef },
            { ref: usersRef },
          ]);
          setIsAnimated(true);
        }
      },
      { rootMargin: "400px", threshold: 1 }
    );

    if (isAnimated) {
      return;
    }

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated, sequenceAnimate]);

  return (
    <div className="bg-[#f4f9ff] mx-auto" ref={wrapperRef}>
      <PaddingDiv className="py-16 max-w-7xl mx-auto tablet:py-24">
        <div className="flex justify-between">
          <StatCard
            icon={<CountryStatIcon />}
            about="Countries"
            count="200+"
            ref={countriesRef}
          />
          <StatCard
            icon={<PublicationStatsIcon />}
            about="Academic Publications"
            count="2B+"
            ref={publicationsRef}
          />
          <StatCard
            icon={<UserStatIcon />}
            about="Users"
            count="8M+"
            ref={usersRef}
          />
        </div>
      </PaddingDiv>
    </div>
  );
};

export default StatsSection;
