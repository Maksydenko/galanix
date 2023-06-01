import { FC } from "react";

import Meta from "./Meta";
import ScrollTop from "./ScrollTop/ScrollTop";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

interface LayoutProps {
  title: string;
  className: string;
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ title, className, children }) => (
  <>
    <Meta title={title} />
    <div className={`wrapper ${openSans.className}`}>
      <main className={`${className}-page`}>{children}</main>
      <ScrollTop />
    </div>
  </>
);

export default Layout;
