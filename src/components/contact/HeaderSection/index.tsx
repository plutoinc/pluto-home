import { useSequenceAnimation } from "@/components/hooks/useSequenceAnimation";
import { FC, useEffect, useRef } from "react";

interface Props {}

const HeaderSection: FC<Props> = () => {
  const animate = useSequenceAnimation();

  const connectRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    animate([
      { ref: titleRef },
      { ref: connectRef, withNav: true, option: { at: 0.5 } },
      { ref: descriptionRef, withNav: true, option: { at: 0.5 } },
    ]);
  });

  return (
    <div className="flex-1 space-y-6">
      <div
        className="font-semibold text-[#f2f6fd] text-opacity-30 tracking-widest"
        ref={connectRef}
      >
        {"LET'S CONNECT"}
      </div>

      <div
        className="text-3xl tablet:text-5xl font-bold text-white"
        ref={titleRef}
      >
        Contact us
      </div>

      <div
        className="text-lg text-white font-medium leading-relaxed"
        ref={descriptionRef}
      >
        Discover new insights for better research and business. We focus on
        in-depth research data and analytics from research papers.
      </div>
    </div>
  );
};

export default HeaderSection;
