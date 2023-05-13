import { FC } from "react";

import { IImg } from "../../../../interfaces/img.interface";
import Grid from "./Grid/Grid";

interface IImagesProps {
  images: IImg[];
  onRestoreImages: () => void;
  onRemoveImage: (id: number) => void;
}

const Images: FC<IImagesProps> = ({
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
