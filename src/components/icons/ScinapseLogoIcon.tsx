import { FC } from "react";

interface Props {
  className?: string;
}

const ScinapseLogoIcon: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="white"></rect>
        <path
          d="M12.1309 18.9105L25.5678 11.8369V19.9261L12.1309 27V18.9105Z"
          fill="#041A3A"
        ></path>
        <path
          d="M6.71484 12.0736L20.1518 5V13.1044L6.71484 20.163V12.0736Z"
          fill="#041A3A"
        ></path>
        <path
          d="M25.5678 19.9261L12.1309 18.9108L25.5678 11.8369V19.9261Z"
          fill="#041A3A"
        ></path>
      </svg>
    </div>
  );
};

export default ScinapseLogoIcon;
