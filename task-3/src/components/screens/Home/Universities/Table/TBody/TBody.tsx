import { IUniversity } from "@/interfaces/university.interface";
import { FC } from "react";
import TRow from "./TRow";

interface ITBodyProps {
  universitiesData: IUniversity[] | null;
}

const TBody: FC<ITBodyProps> = ({ universitiesData }) => {
  return (
    <tbody className="table__body">
      {universitiesData?.map((universityData, index) => (
        <TRow key={index} number={index + 1} universityData={universityData} />
      ))}
    </tbody>
  );
};

export default TBody;
