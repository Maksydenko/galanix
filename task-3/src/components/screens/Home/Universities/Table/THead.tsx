import { FC } from "react";

interface ITHeadProps {}

const THead: FC<ITHeadProps> = ({}) => {
  return (
    <thead className="table__thead">
      <tr className="table__row">
        <th>№</th>
        <th>Domains</th>
        <th>Country</th>
        <th>Alpha two code</th>
        <th>State province</th>
        <th>Web pages</th>
        <th>Name</th>
      </tr>
    </thead>
  );
};

export default THead;
