import { FC } from "react";

import Popup from "../../../../base/Popup/Popup";
import Img from "../../../../base/Img/Img";

import { IImg } from "../../../../../interfaces/img.interface";

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
