import { FC } from "react";
import { IImg } from "../../../interfaces/img.interface";

interface ImgProps {
  className: string;
  img: IImg;
}

const Img: FC<ImgProps> = ({ className, img: { src, alt } }) => (
  <div className={`${className}__img img`}>
    <img src={src} alt={alt} />
  </div>
);

export default Img;
