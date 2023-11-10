import { FC, ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="bg-orange-500">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
