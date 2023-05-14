import { FC } from "react";
import { useSelector } from "react-redux";

import Table from "./Table/Table";

import { selectUniversitiesStatus } from "@/provider/universities/universitiesSlice";

import { StatusType } from "@/types/status.type";

interface ITableProps {}

const Universities: FC<ITableProps> = ({}) => {
  const universitiesStatus: StatusType = useSelector(selectUniversitiesStatus);

  return (
    <section className="universities">
      <div className="universities__container">
        <Table />
      </div>
    </section>
  );
};

export default Universities;
