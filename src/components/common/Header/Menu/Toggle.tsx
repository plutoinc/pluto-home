import { FC } from "react";
import { Menu, X } from "react-feather";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const HeaderToggle: FC<Props> = ({ isOpen, onClick }) => {
  if (isOpen) {
    return (
      <X
        className="w-7 h-7 text-pluto-deep-blue flex-shrink-0 cursor-pointer tablet:hidden"
        onClick={onClick}
      />
    );
  }

  return (
    <Menu
      className="w-7 text-pluto-deep-blue h-7 flex-shrink-0 cursor-pointer tablet:hidden"
      onClick={onClick}
    />
  );
};

export default HeaderToggle;
