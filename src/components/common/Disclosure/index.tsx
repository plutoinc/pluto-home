import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  type: "div" | "list";
  title: string;
  description?: string;
  descriptions?: string[];
}

const Disclosure: FC<Props> = ({ type, title, description, descriptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between cursor-pointer py-6"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="text-xl font-semibold flex-1">{title}</div>
        <ChevronUpIcon
          className={twMerge(
            "w-6 h-6 transition-transform rotate-180",
            isOpen && "rotate-0"
          )}
        />
      </div>

      <div
        className={twMerge(
          "font-medium h-full overflow-hidden transition-all",
          isOpen ? "max-h-[1000px] mb-6" : "max-h-0"
        )}
      >
        {description && <div className="text-gray-500">{description}</div>}

        {type === "div" && (
          <div className="space-y-4">
            {descriptions?.map((description) => (
              <div
                className="leading-[2] font-light text-gray-500"
                key={description}
              >
                {description}
              </div>
            ))}
          </div>
        )}

        {type === "list" && (
          <ul className={"pl-4"}>
            {descriptions?.map((description) => (
              <li
                className="list-disc pl-2 py-1 font-medium text-gray-500"
                key={description}
              >
                {description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-blue-200 w-full h-[1px]" />
    </div>
  );
};

export default Disclosure;
