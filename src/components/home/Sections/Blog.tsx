import MaxWidth from "@/components/common/MaxWidth";
import { FC } from "react";

interface Props {}

const BlogSection: FC<Props> = () => {
  return (
    <div className="bg-pluto-dark-blue">
      <MaxWidth className="space-y-6 py-6 tablet:py-9 text-white">
        <div className="text-3xl tablet:text-5xl font-extrabold">
          Follow our blog!
        </div>
        <div className="tablet:text-2xl">
          Get the latest releases and news about Pluto.
        </div>
      </MaxWidth>
    </div>
  );
};

export default BlogSection;
