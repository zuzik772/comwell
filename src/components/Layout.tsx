import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="bg-orange-400">{children}</main>
      <Footer />
    </div>
  );
};
