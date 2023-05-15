import { FC } from "react";
import { useSelector } from "react-redux";

import THead from "./THead";
import TBody from "./TBody/TBody";

import { selectUniversitiesData } from "@/provider/universities/universitiesSlice";

import { IUniversity } from "@/interfaces/university.interface";

const Table: FC = () => {
  const universitiesData: IUniversity[] | null = useSelector(
    selectUniversitiesData
  );

  if (universitiesData?.length !== 0 && universitiesData !== null) {
    return (
      <table className="universities__table table">
        <THead />
        <TBody universitiesData={universitiesData} />
      </table>
    );
  }
  return null;
};

export default Table;
