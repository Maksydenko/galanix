import { FC } from "react";

import { IImg } from "../../../../../interfaces/img.interface";
import Popup from "../../../../../components/base/Popup/Popup";
import Img from "../../../../../components/base/Img/Img";

interface ItemProps {
  image: IImg;
  onRemoveImage: (id: number) => void;
}

const Item: FC<ItemProps> = ({ image, onRemoveImage }) => {
  const button = <Img className="images" img={image} />;

  const handleClick = () => {
    onRemoveImage(image.id);
  };

  return (
    <div className="images__item">
      <Popup className="images" button={button}>
        <Img className="images" img={image} />
      </Popup>
      <button className="images__remove" onClick={handleClick}></button>
    </div>
  );
};

export default Item;
