import { FC } from "react";

import Item from "./Item";

import { IImg } from "../../../../../interfaces/img.interface";

interface ItemsProps {
  images: IImg[];
  onRemoveImage: (id: number) => void;
}

const Items: FC<ItemsProps> = ({ images, onRemoveImage }) => {
  const items = images.map((image) => (
    <Item key={image.id} image={image} onRemoveImage={onRemoveImage} />
  ));

  return <div className="images__grid">{items}</div>;
};

export default Items;
