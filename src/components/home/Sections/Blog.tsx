import PaddingDiv from "@/components/common/PaddingDiv";
import { FC } from "react";

interface Props {}

const BlogSection: FC<Props> = () => {
  return (
    <PaddingDiv className="py-6 text-white space-y-6 bg-pluto-dark-blue">
      <div className="text-3xl font-extrabold">Follow our blog!</div>
      <div>Get the latest releases and news about Pluto.</div>
    </PaddingDiv>
  );
};

export default BlogSection;
