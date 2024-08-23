import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});



import Nav from "../components/Nav";
import Header from "./header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-black overflow-scroll bg-cover bg-no-repeat ${sora.variable}  font-sora relative`}>
      <Head>
        <title>Adithkrishna Portfolio</title>{" "}
        <link rel="icon" href="/logo.png" />
      </Head>
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
