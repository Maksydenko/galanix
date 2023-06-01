import { FC } from "react";

import Item from "./Item";

import { IImg } from "../../../../../interfaces/img.interface";

interface ItemsProps {
  images: IImg[];
  onRemoveImage: (id: number) => void;
}

const Items: FC<ItemsProps> = ({ images, onRemoveImage }) => {
  return (
    <div className="images__grid">
      {images &&
        images.map((image) => (
          <Item key={image.id} image={image} onRemoveImage={onRemoveImage} />
        ))}
    </div>
  );
};

export default Items;
