import { FC } from "react";

import Items from "./Items/Items";

import { IImg } from "../../../../interfaces/img.interface";

interface ImagesProps {
  images: IImg[];
  onRestoreImages: () => void;
  onRemoveImage: (id: number) => void;
}

const Images: FC<ImagesProps> = ({
  images,
  onRestoreImages,
  onRemoveImage,
}) => (
  <section className="images">
    <div className="images__container">
      <Items images={images} onRemoveImage={onRemoveImage} />
      <button className="images__restore" onClick={onRestoreImages}>
        Restore images
      </button>
    </div>
  </section>
);

export default Images;
