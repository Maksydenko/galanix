import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  checkUniversities,
  selectUniversitiesChecked,
} from "@/provider/universities/universitiesSlice";

import { IUniversity } from "@/interfaces/university.interface";

interface ICheckboxProps {
  name: IUniversity["name"];
}

const Checkbox: FC<ICheckboxProps> = ({ name }) => {
  const checkedUniversities = useSelector(selectUniversitiesChecked);
  const dispatch = useDispatch();

  const isChecked = checkedUniversities.includes(name);

  // Handle change
  interface IHandleChange {
    (): void;
  }
  const handleChange: IHandleChange = () => {
    dispatch(checkUniversities(name));
  };

  return (
    <div className="table__checkbox">
      <input
        type="checkbox"
        className="table__checkbox"
        checked={isChecked}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Checkbox;
