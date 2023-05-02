import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../components/Menu/Menu";
import About from "./about";
import Layout from "@/components/Layout/Layout";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Layout /> */}
      {/* <Menu /> */}
      <About />
    </main>
  );
}
