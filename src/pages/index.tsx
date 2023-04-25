import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../components/Menu/Menu";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-start  justify-between p-24 ${inter.className}`}
    >
      {/* <Layout /> */}
      <Menu />
    </main>
  );
}
