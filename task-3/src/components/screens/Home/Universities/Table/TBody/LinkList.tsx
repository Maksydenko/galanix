import { FC } from "react";
import Link from "next/link";

import { IUniversity } from "@/interfaces/university.interface";

interface ILinkListProps {
  links: IUniversity["domains" | "web_pages"];
}

const LinkList: FC<ILinkListProps> = ({ links }) => (
  <ul>
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link} target="_blank">
          Link
        </Link>
      </li>
    ))}
  </ul>
);

export default LinkList;
