import { FC } from "react";

import ScrollTop from "./ScrollTop/ScrollTop";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

interface ILayoutProps {
  className: string;
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<ILayoutProps> = ({ className, children }) => (
  <div className={`wrapper ${openSans.className}`}>
    <main className={`${className}-page`}>{children}</main>
    <ScrollTop />
  </div>
);

export default Layout;
