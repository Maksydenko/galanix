import { FC } from "react";
import { IImg } from "../../../interfaces/img.interface";

interface IImgProps {
  className: string;
  img: IImg;
}

const Img: FC<IImgProps> = ({ className, img }) => {
  return (
    <div className={`${className}__img img`}>
      <img src={img.src} alt={img.alt} />
    </div>
  );
};

export default Img;
