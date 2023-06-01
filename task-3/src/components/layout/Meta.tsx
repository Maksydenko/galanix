import { FC } from "react";
import Head from "next/head";

interface MetaProps {
  title: string;
}

const Meta: FC<MetaProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default Meta;
