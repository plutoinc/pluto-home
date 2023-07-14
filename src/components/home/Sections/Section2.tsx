import MaxWidth from "@/components/common/MaxWidth";
import PaddingDiv from "@/components/common/PaddingDiv";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const ImageWrapper: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  ...props
}) => {
  return (
    <div className="w-[150px]" {...props}>
      {children}
    </div>
  );
};

const LinkWrapper: FC<
  PropsWithChildren<LinkProps & { className?: string }>
> = ({ children, className, ...props }) => {
  return (
    <Link
      target="_blank"
      {...props}
      className={twMerge(
        "bg-pluto-deep-blue text-white rounded-lg p-2 w-full h-20 flex items-center justify-center hover:scale-110 transition-transform duration-200",
        className
      )}
    >
      {children}
    </Link>
  );
};

const HomeSection2: FC = () => {
  return (
    <PaddingDiv className="text-2xl tablet:text-3xl py-24 tablet:py-48 desktop:text-5xl">
      <MaxWidth className="space-y-12">
        <div className="leading-[1.5]">
          <span className="tablet:font-bold tablet:text-[#3270CD]">
            We solve the challenge of overwhelming amounts of research papers,
          </span>
          difficulties in finding gaps and generating innovative ideas, and
          staying up-to-date with the latest developments{" "}
          <span className="tablet:font-bold tablet:text-[#3270CD]">
            by providing valuable insights through aggregating and analyzing
            academic papers{" "}
          </span>
          , instead of a mere search and listing service.
        </div>
        <div className="leading-[2]">
          Scientists have observed a deceleration in scientific progress
        </div>
        <div className="space-y-8 desktop:space-y-0 desktop:flex desktop:gap-x-8">
          <LinkWrapper href="https://blogs.scientificamerican.com/cross-check/is-science-hitting-a-wall-part-1/">
            <ImageWrapper>
              <Image
                src="https://framerusercontent.com/images/2Tp0iY7jG3HdeuVMsFZtR9Yto.png"
                alt=""
                width={1000}
                height={1000}
              />
            </ImageWrapper>
          </LinkWrapper>
          <LinkWrapper href="https://news.uchicago.edu/scientific-progress-slowing-james-evans">
            <ImageWrapper>
              <Image
                src="https://framerusercontent.com/images/1PIVPAowzI2v2Q87do85PeUHfUI.png"
                alt=""
                width={1000}
                height={1000}
              />
            </ImageWrapper>
          </LinkWrapper>
          <LinkWrapper href="https://www.theatlantic.com/science/archive/2018/11/diminishing-returns-science/575665/">
            <ImageWrapper>
              <Image
                src="https://framerusercontent.com/images/ybg1js6IeYiwdHQE1VgwlNIJgQ.png"
                alt=""
                width={1000}
                height={1000}
              />
            </ImageWrapper>
          </LinkWrapper>
          <LinkWrapper href="https://www.vox.com/future-perfect/2023/1/11/23549993/science-research-progress-studies-disruption-technology-artificial-intelligence-biotechnology">
            <ImageWrapper className="w-16">
              <Image
                src="https://framerusercontent.com/images/3ajgWx1rprwWWnmWPUy0KLdnn4.png"
                alt=""
                width={1000}
                height={1000}
              />
            </ImageWrapper>
          </LinkWrapper>
        </div>
      </MaxWidth>
    </PaddingDiv>
  );
};

export default HomeSection2;
