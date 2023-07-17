import ScrollMotionInView from "@/components/common/Animation/ScrollMotionInView";
import MaxWidth from "@/components/common/MaxWidth";
import Image from "next/image";
import { FC } from "react";
import ContactUsButton from "../ContactUsButton";

interface Props {}

const HomeSection6: FC<Props> = () => {
  return (
    <div className="bg-[#F0F6FF]">
      <MaxWidth className="py-16 space-y-8">
        <ScrollMotionInView className="text-pluto-dark-blue font-extrabold text-3xl tablet:text-4xl desktop:text-5xl">
          We offer custom research analytics services
        </ScrollMotionInView>
        <ScrollMotionInView className="text-pluto-deep-blue text-lg tablet:text-2xl">
          Based on our database, we provide premium reports:
          <ul className="pl-6">
            <li className="list-disc leading-[2]">
              Research benchmark and consultation services for the research
              institutions
            </li>
            <li className="list-disc leading-[2]">
              New technology trends and consultation services for the tech-based
              companies
            </li>
          </ul>
        </ScrollMotionInView>
        <ContactUsButton />
        <div className="bg-white p-4 rounded-2xl">
          <Image
            src="https://framerusercontent.com/images/QVj9dPhzO00WJfHuL8S3OIBlI.png"
            alt="Chart image"
            width={968}
            height={512}
          />
        </div>
      </MaxWidth>
    </div>
  );
};

export default HomeSection6;
