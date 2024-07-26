import MaxWidth from '@/components/common/MaxWidth';
import { PLUTO_BLOG_LINK } from '@/constant/link';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const BlogSection: FC<Props> = () => {
  return (
    <div className="bg-pluto-dark-blue">
      <MaxWidth className="space-y-6 py-6 text-white tablet:py-9">
        <Link
          href={PLUTO_BLOG_LINK}
          className="text-3xl font-extrabold hover:underline tablet:text-5xl"
          target="_blank"
        >
          Follow our blog!
        </Link>
        <div className="tablet:text-2xl">Get the latest releases and news about Pluto.</div>
      </MaxWidth>
    </div>
  );
};

export default BlogSection;
