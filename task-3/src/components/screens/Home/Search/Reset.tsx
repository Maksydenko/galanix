import { Dispatch, FC, SetStateAction } from "react";
import { useDispatch } from "react-redux";

import { clearUniversitiesData } from "@/provider/universities/universitiesSlice";

interface IResetProps {
  setCountry: Dispatch<SetStateAction<string>>;
}

const Reset: FC<IResetProps> = ({ setCountry }) => {
  const dispatch = useDispatch();

  // Handle reset
  interface IHandleReset {
    (): void;
  }
  const handleReset: IHandleReset = () => {
    setCountry("");
    dispatch(clearUniversitiesData());
  };

  return (
    <button
      className="search__button search__button_reset"
      onClick={handleReset}
    >
      Reset
    </button>
  );
};

export default Reset;
