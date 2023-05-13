import { FC } from "react";

import Info from "./Info/Info";
import Images from "./Images/Images";

import { images as defaultImages } from "../../../constants/images.const";

import { useImages } from "../../../hooks/useImages";

const Home: FC = () => {
  const { images, handleRestoreImages, handleRemoveImage } =
    useImages(defaultImages);

  return (
    <main className="home-page">
      <Info imagesLength={images?.length} />
      <Images
        images={images}
        onRestoreImages={handleRestoreImages}
        onRemoveImage={handleRemoveImage}
      />
    </main>
  );
};

export default Home;
