import { FC } from "react";

interface ILoaderProps {
  className: string;
}

const Loader: FC<ILoaderProps> = ({ className }) => (
  <div className={`${className}__loader loader`}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
);

export default Loader;
