import { FC } from "react";

import { handleClassName } from "../../../utils/className.util";

import { IImg } from "../../../interfaces/img.interface";

interface ImgProps {
  className: string;
  modifier?: string;
  img: IImg;
  resetStyle?: boolean;
}

const Img: FC<ImgProps> = ({
  className,
  modifier,
  img: { src, alt },
  resetStyle,
}) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__img`,
    modifier
  );
  const defaultClassName = resetStyle ? "" : " img";

  return (
    <div className={modifiedClassName + defaultClassName}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Img;
