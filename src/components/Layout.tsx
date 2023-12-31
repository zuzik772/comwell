import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer/Footer";
import { MenuContainer } from "./MenuContainer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MenuContainer />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
