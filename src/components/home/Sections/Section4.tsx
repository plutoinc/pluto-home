import Disclosure from "@/components/common/Disclosure";
import MaxWidth from "@/components/common/MaxWidth";
import { PRODUCT_PATH } from "@/routes";
import Link from "next/link";
import { FC } from "react";
import { FEATURES } from "./constant";

const HomeSection4: FC = () => {
  return (
    <div className="bg-[#e5f1ff]">
      <MaxWidth className="space-y-8 tablet:flex tablet:gap-x-12 tablet:items-start tablet:space-y-0 py-16 tablet:py-20">
        <div className="space-y-8 tablet:w-2/5">
          <div className="text-3xl font-extrabold">
            Experience true research with us
          </div>
          <Link
            href={PRODUCT_PATH}
            className="text-sm py-2.5 text-white px-4 bg-pluto-deep-blue rounded-lg text-center font-extrabold inline-flex items-center shadow-md shadow-gray-400"
          >
            Discover more
          </Link>
        </div>
        <div>
          {FEATURES.map(({ title, content }, index) => (
            <Disclosure
              type="div"
              key={title}
              title={title}
              description={content}
            />
          ))}
        </div>
      </MaxWidth>
    </div>
  );
};

export default HomeSection4;
