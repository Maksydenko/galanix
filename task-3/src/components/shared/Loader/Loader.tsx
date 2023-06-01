import { FC } from "react";

interface LoaderProps {
  className: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={`${className}__loader loader`}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
);

export default Loader;
