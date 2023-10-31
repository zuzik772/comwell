import { Html, Head, Main, NextScript } from "next/document";
import { Header } from "../components/Header";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
