import { FC } from "react";
import { useSelector } from "react-redux";

import THead from "./THead";
import TBody from "./TBody/TBody";

import {
  selectUniversitiesData,
  selectUniversitiesStatus,
} from "@/provider/universities/universitiesSlice";

import { IUniversity } from "@/interfaces/university.interface";
import { TypeStatus } from "@/types/status.type";
import Loader from "@/components/shared/Loader/Loader";

const Table: FC = () => {
  const universitiesData: IUniversity[] | null = useSelector(
    selectUniversitiesData
  );
  const universitiesStatus: TypeStatus = useSelector(selectUniversitiesStatus);

  if (universitiesStatus === "succeeded") {
    return (
      <table className="universities__table table">
        <div className="table__body">
          <THead />
          <TBody universitiesData={universitiesData} />
        </div>
      </table>
    );
  } else if (universitiesStatus === "loading") {
    return <Loader className="table" />;
  }
  return null;
};

export default Table;
