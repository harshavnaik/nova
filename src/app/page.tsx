import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Search />
    </main>
  );
}
