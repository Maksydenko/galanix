import { FC } from "react";
import Clock from "./Clock";

interface InfoProps {
  imagesLength: number;
}

const Info: FC<InfoProps> = ({ imagesLength }) => (
  <section className="info">
    <div className="info__container">
      <div className="info__images-number">
        Number of images: {imagesLength}
      </div>
      <Clock />
    </div>
  </section>
);

export default Info;
