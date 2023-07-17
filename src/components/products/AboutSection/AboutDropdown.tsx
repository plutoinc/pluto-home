import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  description?: string;
  descriptions: string[];
}

const AboutDropdown: FC<Props> = ({ title, description, descriptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex cursor-pointer py-6"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="text-xl font-semibold flex-1">{title}</div>
        <ChevronUpIcon
          className={twMerge(
            "w-6 transition-transform rotate-180",
            isOpen && "rotate-0"
          )}
        />
      </div>

      <div
        className={twMerge(
          "font-medium text-[#666666] leading-7 h-full overflow-hidden transition-all",
          isOpen ? "max-h-[400px]" : "max-h-0"
        )}
      >
        {description && <div>{description}</div>}
        <ul className={"pl-4"}>
          {descriptions.map((description) => (
            <li
              className="list-disc pl-2 py-1 font-medium text-[#666666]"
              key={description}
            >
              {description}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#a8ceff] w-full h-[1px]" />
    </div>
  );
};

export default AboutDropdown;
