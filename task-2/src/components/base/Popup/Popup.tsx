import { FC } from "react";

import Body from "./Body";

import { useScrollLock } from "../../../hooks/useScrollLock";

interface PopupProps {
  className: string;
  children: JSX.Element;
  button: JSX.Element | string;
}

const Popup: FC<PopupProps> = ({ className, children, button }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const handleClick = (): void => setIsScrollLocked(!isScrollLocked);

  return (
    <div className={`${className}__popup popup`}>
      <div
        className={`${className}__popup-button popup__button`}
        onClick={handleClick}
      >
        {button}
      </div>
      {isScrollLocked && <Body onClick={handleClick}>{children}</Body>}
    </div>
  );
};

export default Popup;
