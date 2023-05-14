import { FC } from "react";
import Link from "next/link";

import { IUniversity } from "@/interfaces/university.interface";
import LinkList from "./LinkList";

interface IItemProps {
  number: number;
  universityData: IUniversity;
}

const TRow: FC<IItemProps> = ({ number, universityData }) => {
  return (
    <tr className="table__row">
      <td>{number}</td>
      <td>
        <LinkList links={universityData.domains} />
      </td>
      <td>{universityData.country}</td>
      <td>{universityData.alpha_two_code}</td>
      <td>
        {universityData.state_province ? universityData.state_province : "—"}
      </td>
      <td>
        <LinkList links={universityData.web_pages} />
      </td>
      <td>{universityData.name}</td>
    </tr>
  );
};

export default TRow;
