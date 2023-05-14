import { FC } from "react";
import { useSelector } from "react-redux";

import { selectUniversitiesChecked } from "@/provider/universities/universitiesSlice";

const Checked: FC = () => {
  const checkedUniversities = useSelector(selectUniversitiesChecked);

  return (
    <span className="search__checked">
      Checked: {checkedUniversities?.length}
    </span>
  );
};

export default Checked;
