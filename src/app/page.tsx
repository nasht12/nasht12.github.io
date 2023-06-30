import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../components/Menu/Menu";
import About from "../app/about/page";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <About />
    </>
  );
}
