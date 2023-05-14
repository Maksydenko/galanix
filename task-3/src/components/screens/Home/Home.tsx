import { FC } from "react";

import Layout from "@/components/layout/Layout";
import Search from "./Search/Search";
import Universities from "./Universities/Universities";

const Home: FC = () => (
  <Layout className="home">
    <Search />
    <Universities />
  </Layout>
);

export default Home;
