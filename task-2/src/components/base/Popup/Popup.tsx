import { FC, ReactNode } from "react";

import Body from "./Body";

import { useScrollLock } from "../../../hooks/useScrollLock";

import { handleClassName } from "../../../utils/className.util";

interface PopupProps {
  className: string;
  modifier?: string;
  children: ReactNode;
  button: ReactNode;
}

const Popup: FC<PopupProps> = ({ className, modifier, children, button }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => setIsScrollLocked(!isScrollLocked);

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__popup`,
    modifier
  );

  return (
    <div className={`${modifiedClassName} popup`}>
      <div className="popup__button" onClick={handleClick}>
        {button}
      </div>
      {isScrollLocked && <Body onClick={handleClick}>{children}</Body>}
    </div>
  );
};

export default Popup;
