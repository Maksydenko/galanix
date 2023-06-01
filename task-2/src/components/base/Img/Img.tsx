import { FC } from "react";
import { IImg } from "../../../interfaces/img.interface";

interface ImgProps {
  className: string;
  img: IImg;
  resetStyle?: boolean;
}

const Img: FC<ImgProps> = ({ className, img: { src, alt }, resetStyle }) => (
  <div className={`${className}__img${resetStyle ? "" : " img"}`}>
    <img src={src} alt={alt} />
  </div>
);

export default Img;
