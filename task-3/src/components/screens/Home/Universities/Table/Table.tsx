import { FC } from "react";
import { useSelector } from "react-redux";

import THead from "./THead";
import TBody from "./TBody/TBody";

import { selectUniversitiesData } from "@/provider/universities/universitiesSlice";

import { IUniversity } from "@/interfaces/university.interface";

interface ITableProps {}

const Table: FC<ITableProps> = ({}) => {
  const universitiesData: IUniversity[] | null = useSelector(
    selectUniversitiesData
  );
  console.log(universitiesData);

  if (universitiesData?.length !== 0) {
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
