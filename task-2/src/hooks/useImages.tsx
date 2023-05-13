import { useEffect, useState } from "react";

import { IImg } from "../interfaces/img.interface";

// Handle restore images
interface IHandleRestoreImages {
  (): void;
}

// Handle remove image
interface IHandleRemoveImage {
  (id: number): void;
}

interface IUseImages {
  (defaultImages: IImg[]): {
    images: IImg[];
    handleRestoreImages: IHandleRestoreImages;
    handleRemoveImage: IHandleRemoveImage;
  };
}

export const useImages: IUseImages = (defaultImages) => {
  const getImages = () => {
    const storedImages = localStorage.getItem("images");
    // Return images from local storage if they are there
    return storedImages ? JSON.parse(storedImages) : defaultImages;
  };
  const [images, setImages] = useState<IImg[]>(getImages);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  // Handle restore images
  const handleRestoreImages: IHandleRestoreImages = () => {
    setImages(defaultImages);
  };

  // Handle remove image
  const handleRemoveImage: IHandleRemoveImage = (id) => {
    setImages((prevState) => prevState.filter((image) => image.id !== id));
  };

  return {
    images,
    handleRestoreImages,
    handleRemoveImage,
  };
};
