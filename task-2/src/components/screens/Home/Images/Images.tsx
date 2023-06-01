import { FC } from "react";

import Grid from "./Grid/Grid";

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
}) => {
  const handleClick = () => {
    onRestoreImages();
  };

  return (
    <section className="images">
      <div className="images__container">
        <Grid images={images} onRemoveImage={onRemoveImage} />
        <button className="images__restore" onClick={handleClick}>
          Restore images
        </button>
      </div>
    </section>
  );
};

export default Images;
